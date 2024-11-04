//React
import React, { useState } from "react";
//Utils(Images, Colors, Typography, Interfaces, etc.)
import { Upload } from "lucide-react";
import { FileInputProps } from "../../lib/utils/interfaces";

export default function FileInput({
  label,
  className = "",
  accept,
  ...props
}: FileInputProps) {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setFileName(file ? file.name : null);
  };

  const handleButtonClick = () => {
    const fileInput = document.querySelector(
      "input[type=file]"
    ) as HTMLInputElement;
    fileInput?.click();
  };

  return (
    <div className={`flex flex-col ${className}`}>
      {label && <label className="mb-1 text-gray-700">{label}</label>}
      <div className="flex items-center border border-gray-300 rounded-lg p-2 cursor-pointer">
        <input
          type="file"
          accept={accept}
          className="hidden"
          onChange={handleFileChange}
          {...props}
        />
        <button
          className="flex items-center text-gray-500"
          onClick={handleButtonClick}
        >
          <Upload className="h-5 w-5 mr-2" />
          <span className="text-gray-700">{fileName || "Subir archivo"}</span>
        </button>
      </div>
    </div>
  );
}
