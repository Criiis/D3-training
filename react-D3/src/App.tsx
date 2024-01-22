import { useTheme } from "next-themes";
import Chart from "./components/chart/chart";
import Header from "./layout/header";

function App() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Header />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Chart />
      theme: {theme}
      <button onClick={() => setTheme("light")}>Light Mode</button>
      <button onClick={() => setTheme("dark")}>Dark Mode</button>
    </>
  );
}

export default App;
