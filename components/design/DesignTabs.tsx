'use client";'

import { List, Root, Trigger } from "@radix-ui/react-tabs";

interface DesignTabsProps {
  selectedTab: string;
  onValueChange: (value: string) => void;
}

const DesignTabs = ({ selectedTab, onValueChange }: DesignTabsProps) => {
  return (
    <Root
      value={selectedTab}
      onValueChange={onValueChange}
      className="w-full mb-4"
    >
      <List className="flex border-b border-[#e3d6c1]">
        <Trigger
          value="style"
          className={`px-4 py-2 text-sm font-medium ${
            selectedTab === "style"
              ? "border-b-2 border-[#7a5f3e] text-[#3f3a2f]"
              : "text-[#6e6556] hover:text-[#3f3a2f]"
          }`}
        >
          Style Settings
        </Trigger>

        <Trigger
          value="preview"
          className={`px-4 py-2 text-sm font-medium ${
            selectedTab === "preview"
              ? "border-b-2 border-[#7a5f3e] text-[#3f3a2f]"
              : "text-[#6e6556] hover:text-[#3f3a2f]"
          }`}
        >
          Preview
        </Trigger>
      </List>
    </Root>
  );
};

export default DesignTabs;