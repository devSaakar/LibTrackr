import React, { useState } from "react";
import { Command, CommandInput, CommandList, CommandItem } from "./command";

interface Option {
  value: string;
  label: string;
}

const AutoComplete = ({
  handleSearch,
  handleSelect,
  options,
}: {
  handleSearch: (query: string) => void;
  handleSelect: (query: string) => void;
  options: Option[];
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    handleSearch(value); // Trigger the parent to fetch new options
  };

  return (
    <Command className="border-2 border-gray-700">
      <CommandInput
        placeholder="Search framework..."
        value={inputValue}
        onChangeCapture={handleInputChange}
      />
      <CommandList>
        {options && options.length > 0
          ? options.map((option: Option, index: number) => (
              <CommandItem
                key={index}
                onSelect={() => handleSelect(option.value)}
              >
                {option.label}
              </CommandItem>
            ))
          : inputValue &&
            options.length === 0 && (
              <CommandItem disabled>No results found</CommandItem>
            )}
      </CommandList>
    </Command>
  );
};

export default AutoComplete;
