import React from "react";

const MaxWidthWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className="mx-auto max-w-3xl border-x border-dashed border-[var(--color-main-border)] h-[calc(100vh-6.25rem)] px-5 pt-3 pb-0 relative">
        {children}
      </main>
    </>
  );
};

export default MaxWidthWrapper;
