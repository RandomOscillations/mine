import {
  Navbar,
  MaxWidthWrapper,
  IntroductionHeader,
  TabSwitch,
} from "@/components";
import React from "react";

const Home = () => {
  return (
    <>
      {/* navbar */}
      <Navbar />
      <MaxWidthWrapper>
        <IntroductionHeader />
        <TabSwitch />
      </MaxWidthWrapper>
    </>
  );
};

export default Home;
