import Header from "./components/Header.tsx";
import { Outlet } from "react-router";
import WaveBackground from "./subComponents/WaveBackgorund.tsx";

function App() {
  return (
    // <div className="min-h-screen bg-white dark:bg-red-900 transition-colors duration-300 ">
    <WaveBackground>
      <Header />
      <Outlet />
    </WaveBackground>
    // </div>
  );
}

export default App;
