//React
import { useState } from 'react';
//Utils(Images, Colors, Typography, Interfaces, etc.)
import { AutocompleteProps } from '../../lib/utils/interfaces';

export default function Autocomplete({ options, className = '' }: AutocompleteProps) {
  const [input, setInput] = useState('');
  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <div className={`relative ${className}`}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="
          w-full px-4 py-2 border border-gray-300 rounded shadow-sm focus:border-primary 
          focus:ring-primary-light focus:outline-none focus:ring-1 transition duration-200
        "
        placeholder="Type to search..."
      />
      {input && filteredOptions.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded shadow mt-1">
          {filteredOptions.map((option) => (
            <li
              key={option}
              className="px-4 py-2 hover:bg-primary-light cursor-pointer transition duration-200"
              onClick={() => {
                setInput(option);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}