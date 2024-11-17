import TagDropdown from "./TagDropdownProps";
import { useUserContext } from "@/app/hooks/useUserContext";

interface RowData {
  id: number;
  link: string;
  prefix: string;
  selectedTags: string[];
}
interface UploadTableProps {
  data: RowData[];
  setData: React.Dispatch<React.SetStateAction<RowData[]>>;
}

const UploadsTable : React.FC<UploadTableProps> = ({ data, setData }) => {
  const tags = ["TAG 1", "TAG 2", "TAG 3", "TAG 4", "TAG 5"];
  const { isDarkMode } = useUserContext();

  const handleAddTag = (id: number, tag: string) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id && !item.selectedTags.includes(tag)
          ? { ...item, selectedTags: [...item.selectedTags, tag] }
          : item
      )
    );
  };

  const handleRemoveTag = (id: number, tag: string) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id
          ? {
              ...item,
              selectedTags: item.selectedTags.filter((t) => t !== tag),
            }
          : item
      )
    );
  };

  return (
    <>
      {data.length === 0 ? (
        <div className="text-2xl font-bold mt-10">No Data</div>
      ) : (
        <div className={`container mx-auto md:p-4 p-0`}>
          <h2 className="text-2xl font-semibold mb-4">Uploads</h2>
          <div
            className={`overflow-x-auto md:overflow-hidden py-8 px-6 pt-1 pb-1 rounded-lg shadow-md transition-all duration-300 ${
              isDarkMode ? "bg-dark-darker text-[#E0DCDD]" : "bg-gray-200"
            }`}
          >
            <table className="w-full table-auto border-separate border-spacing-y-4">
              <thead>
                <tr
                  className={`text-left border-0 transition-all duration-300 ${
                    isDarkMode ? "bg-dark-darker" : "bg-gray-200"
                  }`}
                >
                  <th className="p-1 font-medium">Sl No.</th>
                  <th className="p-1 font-medium">Prefix</th>
                  <th className="p-1 font-medium">Links</th>
                  <th className="p-1 font-medium">Add Tags</th>
                  <th className="p-1 font-medium">Selected Tags</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr
                    key={row.id}
                    className={`transition-all duration-300 ${
                      isDarkMode ? "bg-[#161616] text-[#E0DCDD]" : "bg-white"
                    }`}
                  >
                    <td className="p-4 rounded-lg">
                      {String(index + 1).padStart(2, "0")}
                    </td>
                    <td className="p-4 text-blue-500 ">
                      <a
                        href={`https://${row.link}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {row.link}
                      </a>
                    </td>
                    <td className="p-2">{row.prefix}</td>
                    <td className="p-2 ">
                      <TagDropdown
                        tags={tags}
                        onSelectTag={(tag) => handleAddTag(row.id, tag)}
                      />
                    </td>
                    <td className="p-2 flex flex-wrap gap-2">
                      {row.selectedTags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-primary text-white px-2 py-[1px] rounded-md text-sm flex  items-center gap-1 "
                        >
                          {tag}
                          <button
                            onClick={() => handleRemoveTag(row.id, tag)}
                            className="ml-1 text-white bg-transparent hover:bg-blue-700 rounded-full p-1"
                          >
                            ✕
                          </button>
                        </span>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default UploadsTable;
