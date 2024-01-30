import Header from "./layout/header";
import TotalCard from "./components/total-card";
import SwiperPreview from "./components/swiper-preview";
import PreviewCard from "./components/preview-card";
import MainChart from "./components/main-chart";
import HoldingCard from "./components/holding-card";
import { holdings } from "./data/stocks";
import updateHoldingStocks from "./lib/update-holding-stocks";

const holdingData = updateHoldingStocks(holdings);

function App() {
  return (
    <>
      <Header />
      <section className="flex flex-wrap justify-between flex-col px-4 md:flex-row md:items-center">
        <SwiperPreview className="w-full md:w-homepageTemplate mb-4 md:mb-0" />
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
    </>
  );
}

export default App;
