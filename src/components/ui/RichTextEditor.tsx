//Utils(Images, Colors, Typography, Interfaces, etc.)
import { RichTextEditorProps } from "../../lib/utils/interfaces";

export default function RichTextEditor({
  className = "",
  ...props
}: RichTextEditorProps) {
  return (
    <div
      className={`border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary-light transition duration-150 ${className}`}
    >
      <textarea className="w-full h-48 border-none outline-none" {...props} />
    </div>
  );
}
