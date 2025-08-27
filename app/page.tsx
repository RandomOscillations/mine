import {
  Navbar,
  MaxWidthWrapper,
  IntroductionHeader,
  TabSwitch,
  TabContent,
  PageFooter,
} from "@/components";

import { Provider } from "jotai";
import React from "react";

const Home = () => {
  return (
    <>
      {/* navbar */}
      <Navbar />
      <MaxWidthWrapper>
        <IntroductionHeader />
        <Provider>
          <TabSwitch />
          <TabContent />
        </Provider>
      </MaxWidthWrapper>
      {/* footer section */}
      <PageFooter />
    </>
  );
};

export default Home;
