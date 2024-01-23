import Header from "./layout/header";
import TotalCard from "./components/total-card";
import CompaniesCard from "./components/companies-card";

function App() {
  return (
    <>
      <Header />
      <main>
        <TotalCard />
        <div className="flex flex-wrap gap-4 mt-4">
          <CompaniesCard />
          <CompaniesCard />
          <CompaniesCard />
          <CompaniesCard />
        </div>
      </main>
    </>
  );
}

export default App;
