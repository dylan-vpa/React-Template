//Utils(Images, Colors, Typography, Interfaces, etc.)
import { TableProps } from '../../lib/utils/interfaces';

function Table({ headers, data, className = '' }: TableProps) {
  return (
    <table className={`min-w-full bg-white rounded-lg shadow-md ${className}`}>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index} className="px-4 py-2 border-b">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className="px-4 py-2 border-b">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
