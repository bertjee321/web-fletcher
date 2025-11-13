"use client";

import { Root } from "@radix-ui/react-tabs";

interface TabsContainerProps {
  children: React.ReactNode;
  value: string;
  onValueChange: (value: string) => void;
}

const TabsContainer = ({
  children,
  value,
  onValueChange,
}: TabsContainerProps) => {
  return (
    <Root value={value} onValueChange={onValueChange} className="w-full mb-4">
      {children}
    </Root>
  );
};

export default TabsContainer;
