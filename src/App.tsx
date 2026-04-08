import { Outlet } from "react-router";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ScrollProgress from "./components/ui/ScrollProgress";



export function App() {

    return (
        <div className="min-h-screen dark-bg">

            <Header />
            <main>
                {/* <ScrollProgress /> */}
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
