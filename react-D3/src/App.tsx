import Header from "./layout/header";
import TotalCard from "./components/total-card";
import SwiperPreview from "./components/swiper-preview";

// Import Swiper React components

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-wrap justify-between flex-col mt-4 p-4 md:flex-row md:items-center">
        <SwiperPreview className="w-full md:w-swiperCustom mb-4 md:mb-0" />
        <TotalCard />
      </div>
      <div>
        <div className="flex flex-wrap justify-between flex-col-reverse p-4 md:flex-row md:items-center">
          <div className="w-[calc(100%_-_400px)] h-[100px]"></div>
          <div className="bg-zinc-200 rounded-xl p-3 dark:bg-zinc-800 w-full md:max-w-[350px] flex flex-col justify-between bg-left-bottom bg-no-repeat">
            <h2 className="mt-0 mb-1">Holdings</h2>

            <div className="py-4 border-solid border-0 border-b border-zinc-700 flex items-center">
              <div className="w-[40px] h-[40px] rounded-full bg-zinc-200" />
              <div className="flex justify-between w-[calc(100%_-40px)] items-end pl-2">
                <div>
                  <p className="m-0 font-medium text-base leading-5">
                    Berkshire Hathaway
                    <br />
                    <span className="m-0 mt-2 font-medium text-zinc-400 text-xs">
                      10.3182937 shares
                    </span>
                  </p>
                </div>
                <p className="m-0 font-medium text-base leading-5 text-right">
                  £5876.00
                  <br />
                  <span className="m-0 text-xs font-bold text-green-400">(10.15%)</span>
                </p>
              </div>
            </div>
            <div className="py-4 border-solid border-0 border-b border-zinc-700 flex items-center">
              <div className="w-[40px] h-[40px] rounded-full bg-zinc-200" />
              <div className="flex justify-between w-[calc(100%_-40px)] items-end pl-2">
                <div>
                  <p className="m-0 font-medium text-base leading-5">
                    Berkshire Hathaway
                    <br />
                    <span className="m-0 mt-2 font-medium text-zinc-400 text-xs">
                      10.3182937 shares
                    </span>
                  </p>
                </div>
                <p className="m-0 font-medium text-base leading-5 text-right">
                  £5876.00
                  <br />
                  <span className="m-0 text-xs font-bold text-green-400">(10.15%)</span>
                </p>
              </div>
            </div>
            <div className="py-4 flex items-center">
              <div className="w-[40px] h-[40px] rounded-full bg-zinc-200" />
              <div className="flex justify-between w-[calc(100%_-40px)] items-end pl-2">
                <div>
                  <p className="m-0 font-medium text-base leading-5">
                    Berkshire Hathaway
                    <br />
                    <span className="m-0 mt-2 font-medium text-zinc-400 text-xs">
                      10.3182937 shares
                    </span>
                  </p>
                </div>
                <p className="m-0 font-medium text-base leading-5 text-right">
                  £5876.00
                  <br />
                  <span className="m-0 text-xs font-bold text-green-400">(10.15%)</span>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
