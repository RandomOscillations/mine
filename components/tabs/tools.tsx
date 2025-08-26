import React from "react";
import { frontendTools, backendTools } from "@/constants";
import ToolCard from "../cards/tool-card";

const Tools = () => {
  return (
    <div className="space-y-8">
      {/* Frontend Tools Section */}
      <div>
        <h3 className="text-base font-semibold mb-4 text-[var(--color-text)]">
          Frontend
        </h3>
        <div className="flex flex-wrap gap-x-16 gap-y-8">
          {frontendTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </div>

      {/* Backend Tools Section */}
      <div>
        <h3 className="text-base font-semibold mb-4 text-[var(--color-text)]">
          Backend
        </h3>

        <div className="flex flex-wrap gap-x-16 gap-y-6">
          {backendTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;
