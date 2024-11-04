//React
import { useState } from 'react';
//Utils(Images, Colors, Typography, Interfaces, etc.)
import { TabsProps } from '../../lib/utils/interfaces';

function Tabs({ tabs, className = '' }: TabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  return (
    <div className={`border-b ${className}`}>
      <ul className="flex space-x-4">
        {tabs.map((tab) => (
          <li key={tab.label} className="cursor-pointer" onClick={() => setActiveTab(tab.label)}>
            <span className={`py-2 px-4 ${activeTab === tab.label ? 'border-b-2 border-blue-500' : ''}`}>
              {tab.label}
            </span>
          </li>
        ))}
      </ul>
      <div className="p-4">
        {tabs.find((tab) => tab.label === activeTab)?.content}
      </div>
    </div>
  );
}

export default Tabs;
