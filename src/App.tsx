import { Outlet } from "react-router";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";



export function App() {
    return (
        <div className="min-h-screen dark-bg">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
