"use client";

import { useAtomValue } from "jotai";
import { tabAtom } from "./atoms";
import Experience from "./experience";
import Projects from "./projects";
import Tools from "./tools";

const TabContent = () => {
  const activeTab = useAtomValue(tabAtom);

  switch (activeTab) {
    case "projects":
      return <Projects />;
    case "experience":
      return <Experience />;
    case "tools":
      return <Tools />;
    default:
      return <div>TabContent</div>;
  }
};

export default TabContent;
