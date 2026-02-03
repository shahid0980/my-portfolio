import Header from "./components/Header.jsx";
import { Outlet } from "react-router";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 ">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
