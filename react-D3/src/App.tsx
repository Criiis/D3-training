import Header from "./layout/header";
import TotalCard from "./components/total-card";
import SwiperPreview from "./components/swiper-preview";

// Import Swiper React components

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-wrap justify-between flex-col-reverse mt-4 p-4 md:flex-row md:items-center">
        <SwiperPreview className="w-full md:w-swiperCustom mt-4 md:mt-0" />
        <TotalCard />
      </div>
    </>
  );
}

export default App;
