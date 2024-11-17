import { FaFileExcel } from "react-icons/fa";
import { useUserContext } from "@/app/hooks/useUserContext";

interface UploadBtnProps {
  handleDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedFile: File | null;
}

const UploadBtn: React.FC<UploadBtnProps> = ({ handleDrop, handleFileChange, selectedFile }) => {
  const {isDarkMode } = useUserContext();
  
  return (
    <div
      className={`transition-all duration-300 flex flex-col items-center justify-center w-full h-40 sm:h-48 border-[1px] border-blue-300 border-dashed rounded-lg hover:border-blue-500 ${isDarkMode && "bg-dark-darker"}`}
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <FaFileExcel className="text-green-600 text-3xl sm:text-4xl mb-3 sm:mb-4" />
      <p className="text-gray-400 text-sm text-center">
        {selectedFile ? (
          <span>{selectedFile.name}</span>
        ) : (
          <>
            Drop your excel sheet here or
            <label className="text-primary cursor-pointer hover:underline ml-1">
              browse
              <input
                type="file"
                accept=".csv, .xlsx, .xls"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </>
        )}
      </p>
    </div>
  );
};

export default UploadBtn;
