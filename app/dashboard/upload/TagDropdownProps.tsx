import { useState, useRef, useEffect } from 'react';
import { useUserContext } from '@/app/hooks/useUserContext';

interface TagDropdownProps {
  tags: string[];
  onSelectTag: (tag: string) => void;
}

const TagDropdown: React.FC<TagDropdownProps> = ({ tags, onSelectTag }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const {isDarkMode } = useUserContext();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`appearance-none text-sm p-2  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer ${isDarkMode ? "bg-[#0D0D0D] text-[#E0DCDD]" : "bg-gray-200"}`}
      >
        Select Tags
      </button>
      
      {isOpen && (
        <div className="z-10 absolute mt-2 w-32 bg-white rounded-lg shadow-lg p-2 border">
          {tags.map((tag) => (
            <div
              key={tag}
              onClick={() => {
                onSelectTag(tag);
                setIsOpen(false);
              }}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md text-gray-700"
            >
              {tag}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TagDropdown;