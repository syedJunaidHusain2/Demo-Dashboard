"use client";

interface WarningModalProps {
  setIsDownloaded: React.Dispatch<React.SetStateAction<boolean>>;
}

const WarningModal: React.FC<WarningModalProps> = ({ setIsDownloaded }) => {
  const handleDownload = () => {
    const fileUrl = "/demo.csv";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "demo.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    localStorage.setItem("is_downloaded", "true");
    setIsDownloaded(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-11/12 max-w-md p-6 rounded-lg shadow-lg">
        <div className="text-xl font-semibold text-gray-800 mb-4">
          Download Required
        </div>
        <div className="text-gray-600 text-sm mb-6">
          *This Demo app requires a download (
          <span className="font-bold italic">'demo.csv'</span> file) to run because, for now, it only works with files that
          have a <span className="font-semibold text-indigo-600">tablehead</span>{" "}
          containing <span className="font-semibold text-indigo-600">'links'</span>{" "}
          and <span className="font-semibold text-indigo-600">'prefix'</span>.
        </div>
        <button
          onClick={handleDownload}
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md font-medium transition-transform transform hover:scale-105 animate-pulse focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default WarningModal;