import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";
import { Type } from "typebox";
import { exec } from "node:child_process";
import { promisify } from "node:util";

const execPromise = promisify(exec);

export default function (pi: ExtensionAPI) {
  pi.registerTool({
    name: "markitdown",
    label: "MarkItDown",
    description: "Convert a URL or a local file to Markdown using markitdown.",

    parameters: Type.Object({
      source: Type.String({
        description: "The URL or local file path to convert to Markdown.",
      }),
    }),

    async execute(toolCallId, params, signal, onUpdate, ctx) {
      const { source } = params;

      onUpdate?.({
        content: [
          { type: "text", text: `Converting ${source} to Markdown...` },
        ],
        details: { source },
      });

      try {
        // Run markitdown via shell. It handles both URLs and local paths.
        const { stdout, stderr } = await execPromise(`markitdown "${source}"`, {
          signal,
        });

        if (stderr && !stdout) {
          return {
            content: [{ type: "text", text: `Error: ${stderr}` }],
            isError: true,
            details: { source, stderr },
          };
        }

        return {
          content: [{ type: "text", text: stdout }],
          details: { source },
        };
      } catch (error: any) {
        return {
          content: [
            {
              type: "text",
              text: `Failed to convert ${source}: ${error.message}`,
            },
          ],
          isError: true,
          details: { source, error: error.message },
        };
      }
    },
  });
}
