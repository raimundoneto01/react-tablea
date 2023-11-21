import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/header";
import { SaideBar } from "../../components/SaideBar/SaideBar";

export function MainLayout(){
    return(
         <main>
             <Header/>
                <section className="min-h-screen flex bg-slate-100">
                   <SaideBar/>
                   <div className="p-5">
                    <Outlet/>
                   </div>
                </section>
         </main>
    )
}