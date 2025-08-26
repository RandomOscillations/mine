import React from "react";

const MaxWidthWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className="mx-auto max-w-2xl border-x border-dashed border-[var(--color-main-border)] h-[calc(100vh-4rem)] px-5 py-3 relative">
        {children}
      </main>
    </>
  );
};

export default MaxWidthWrapper;
