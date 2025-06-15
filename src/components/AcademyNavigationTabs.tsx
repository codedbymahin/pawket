
import { ReactNode } from "react";

interface Tab {
  id: string;
  label: string;
  icon: ReactNode;
}

interface AcademyNavigationTabsProps {
  tabs: Tab[];
  activeTab: string;
  setActiveTab: (id: string) => void;
}

const AcademyNavigationTabs = ({
  tabs,
  activeTab,
  setActiveTab
}: AcademyNavigationTabsProps) => (
  <div className="flex flex-wrap justify-center gap-2 mb-6">
    {tabs.map((tab) => (
      <button
        key={tab.id}
        onClick={() => setActiveTab(tab.id)}
        className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
          activeTab === tab.id
            ? "bg-[#00AEEF] text-white"
            : "bg-white text-gray-600 hover:bg-gray-100"
        }`}
      >
        {tab.icon}
        <span>{tab.label}</span>
      </button>
    ))}
  </div>
);

export default AcademyNavigationTabs;
