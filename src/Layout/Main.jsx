import { Outlet, useLocation } from "react-router-dom";

import Footer from "../Pages/Shared/Footer";
import NavigationBar from "../Pages/Shared/NavigationBar/NavigationBar";
import { useEffect } from "react";


const Main = () => {
    const loc = useLocation()
    console.log(loc)

    useEffect(()=>{
        if(loc.pathname === '/'){
            document.title = `Toy World - HOME`
        }else{
            document.title = `Toy World ${loc.pathname.replace("/","- ")}`
        }
        if(loc.state){
            document.title = loc.state
        }
    },[loc.pathname])

    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;