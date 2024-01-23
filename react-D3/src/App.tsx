import { useTheme } from "next-themes";
import Chart from "./components/chart/chart";
import Header from "./layout/header";
import TotalCard from "./components/total-card";
import CompaniesCard from "./components/companies-card";

function App() {
  const { theme, setTheme } = useTheme();

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
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <Chart />
        theme: {theme}
        <button onClick={() => setTheme("light")}>Light Mode</button>
        <button onClick={() => setTheme("dark")}>Dark Mode</button>
      </main>
    </>
  );
}

export default App;
