'use client";';

import { List, Root, Trigger } from "@radix-ui/react-tabs";

interface TabsProps {
  tabs: string[];
  selectedTab: string;
  onValueChange: (value: string) => void;
}

export const Tabs = ({ tabs, selectedTab, onValueChange }: TabsProps) => {
  return (
    <Root
      value={selectedTab}
      onValueChange={onValueChange}
      className="w-full mb-4"
    >
      <List className="flex border-b border-[#e3d6c1]">
        {tabs.map((tab) => (
          <Trigger
            key={tab}
            value={tab}
            className={`px-4 py-2 text-sm font-medium ${
              selectedTab === tab
                ? "border-b-2 border-[#7a5f3e] text-[#3f3a2f]"
                : "text-[#6e6556] hover:text-[#3f3a2f]"
            }`}
          >{tab}</Trigger>
        ))}
      </List>
    </Root>
  );
};
