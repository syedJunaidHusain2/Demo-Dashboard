"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { MdOutlineFileUpload } from "react-icons/md";
import Papa from "papaparse";
import UploadsTable from "./UploadsTable";
import UploadBtn from "./UploadBtn";
import WarningModal from "./WarningModal";
import { useUserContext } from "../../hooks/useUserContext";

interface RowData {
  id: number;
  link: string;
  prefix: string;
  selectedTags: string[];
}
interface ParseResult<T> {
  data: T[];
  errors: any[];
  meta: any;
}

const FileUpload: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [data, setData] = useState<RowData[]>([]);
  const [isDownloaded, setIsDownloaded] = useState(false);
  const { isDarkMode } = useUserContext(); 

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (localStorage.getItem("is_downloaded")) {
      if (event.target.files && event.target.files[0]) {
        setSelectedFile(event.target.files[0]);
      }
    } else {
      setIsDownloaded(true);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      Papa.parse(selectedFile, {
        header: true,
        skipEmptyLines: true,
        complete: (result: ParseResult<{ [key: string]: string }>) => {
          const parsedData: RowData[] = result.data.map((row, index) => ({
            id: index + 1,
            link: row["links"] || "",
            prefix: row["prefix"] || "",
            selectedTags: [],
          }));
          setData(parsedData);
        },
      });

      toast.success(`File ${selectedFile.name} uploaded successfully!`);
      setSelectedFile(null);
    } else {
      toast.error("No file selected!");
    }
  };

  return (
    <div
      className={`flex justify-center flex-col items-center min-h-max p-4 h-screen transition-all duration-300 ${
        isDarkMode ? "bg-dark-background" : "bg-gray-100"
      }`}
    >
      <div
        className={`flex flex-col items-center w-full max-w-lg p-4 mx-auto rounded-lg ${
          isDarkMode ? "bg-dark-darker" : "bg-light-background shadow-md"
        }`}
      >
        <UploadBtn
          handleDrop={(e : any) => {
            e.preventDefault();
            if (e.dataTransfer.files && e.dataTransfer.files[0]) {
              setSelectedFile(e.dataTransfer.files[0]);
            }
          }}
          handleFileChange={handleFileChange}
          selectedFile={selectedFile}
        />

        <button
          onClick={handleUpload}
          className="flex items-center justify-center w-full mt-5 sm:mt-6 px-3 sm:px-4 py-2 text-white bg-primary rounded-md hover:bg-indigo-600"
        >
          <MdOutlineFileUpload size={17} className="mr-2" />
          <span className="text-sm">Upload</span>
        </button>
      </div>

      <UploadsTable data={data} setData={setData} />

      {isDownloaded && <WarningModal setIsDownloaded={setIsDownloaded} />}
    </div>
  );
};

export default FileUpload;