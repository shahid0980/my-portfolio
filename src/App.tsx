import Header from "./components/Header.tsx";
import { Outlet } from "react-router";


function App() {
  return (
    <div className="min-h-screen transition-colors duration-300 ">

      <Header />
      <Outlet />

    </div>
  );
}

export default App;
