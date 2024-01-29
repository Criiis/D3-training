import Header from "./layout/header";
import TotalCard from "./components/total-card";
import SwiperPreview from "./components/swiper-preview";
import PreviewCard from "./components/preview-card";
import { holdings } from "./data/stocks";
import MainChart from "./components/main-chart";

// Import Swiper React components

// loop through holdings and render a preview card for each holding

function App() {
  return (
    <>
      <Header />
      <section className="flex flex-wrap justify-between flex-col px-4 md:flex-row md:items-center">
        <SwiperPreview className="w-full md:w-homepageTemplate mb-4 md:mb-0" />
        <TotalCard />
      </section>
      <section className="flex flex-wrap justify-between flex-col-reverse px-4 pt-4 md:flex-row">
        <div className="w-full md:w-homepageTemplate">
          <MainChart />
        </div>

        <div className="md:max-w-[350px] w-full">
          <div className="bg-slate-100 rounded-xl p-3 dark:bg-zinc-900 w-full flex flex-col justify-between bg-left-bottom bg-no-repeat">
            <h2 className="mt-0 mb-1">My Holdings</h2>
            {holdings.companies.map((data) => {
              return <PreviewCard key={data.symbol} stock={data} />;
            })}
            <button className="bg-zinc-300 dark:bg-zinc-800  border-0 text-base rounded-lg py-2 px-4 cursor-pointer font-bold">
              View all
            </button>
          </div>

          <div className="bg-slate-100 rounded-xl p-3 dark:bg-zinc-900 w-full flex flex-col justify-between bg-left-bottom bg-no-repeat mt-4">
            <h2 className="mt-0 mb-1">My Cryptocurrency</h2>
            {holdings.crypto.map((data) => {
              return <PreviewCard key={data.symbol} stock={data} />;
            })}
            <button className="bg-zinc-300 dark:bg-zinc-800  border-0 text-base rounded-lg py-2 px-4 cursor-pointer font-bold">
              Withdraw
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
