import { useState } from "react";
import Header from "./layout/header";
import TotalCard from "./components/total-card";
import SwiperPreview from "./components/swiper-preview";
import PreviewCard from "./components/preview-card";
import MainChart from "./components/main-chart";
import HoldingCard from "./components/holding-card";
import { holdings } from "./data/stocks";
import updateHoldingStocks from "./lib/update-holding-stocks";
import Pill from "./components/pill";
import DisclaimerContainer from "./components/disclaimer-container";

const holdingData = updateHoldingStocks(holdings);

const App = () => {
  const [isDisclaimerActive, setIsDisclaimerActive] = useState(true);
  const handleDisclaimerClick = () => {
    setIsDisclaimerActive(false);
  };
  return (
    <>
      <Header />

      <div className="px-4 mb-2">
        <Pill active>🔥 Trending</Pill>
        <Pill>💻 Tech</Pill>
      </div>

      <section className="flex flex-wrap justify-between flex-col px-4 md:flex-row md:items-center">
        <SwiperPreview className="w-full md:w-homepageTemplate mb-4 md:mb-0 md:mr-4" />
        <TotalCard holdings={holdingData} />
      </section>

      <section className="flex flex-wrap justify-between flex-col-reverse px-4 pt-4 md:flex-row">
        <div className="w-full md:w-homepageTemplate">
          <MainChart />
        </div>
        <div className="md:max-w-[350px] w-full">
          <HoldingCard title="My Portfolio" actionText="View All">
            {holdingData.companies.map((data) => {
              return <PreviewCard key={data.symbol} stock={data} />;
            })}
          </HoldingCard>
          <HoldingCard title="My Crypto" actionText="Withdraw" className="mt-4">
            {holdingData.crypto.map((data) => {
              return <PreviewCard key={data.symbol} stock={data} />;
            })}
          </HoldingCard>
        </div>
      </section>
      {isDisclaimerActive && <DisclaimerContainer onClick={handleDisclaimerClick} />}
    </>
  );
};

export default App;
