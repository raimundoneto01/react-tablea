import { Outlet } from "react-router-dom";
import { Header } from "../../components/Layouts/main/Header/Header";
import { SaideBar } from "../../components/Layouts/main/SaideBar/SaideBar";

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