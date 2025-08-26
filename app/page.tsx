import Navbar from "@/components/navbar";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import React from "react";
import IntroductionHeader from "@/components/introduction-header";

const Home = () => {
  return (
    <>
      {/* navbar */}
      <Navbar />
      <MaxWidthWrapper>
        <IntroductionHeader />
      </MaxWidthWrapper>
    </>
  );
};

export default Home;
