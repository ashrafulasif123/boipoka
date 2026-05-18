import { Outlet } from "react-router";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";

const Root = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>
            <div className="">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;