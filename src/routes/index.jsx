import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../Layouts/MainLayout";
import Hooks from "../pages/Hooks";




export const routes = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout />,
      
        children: [
            {
                path:'/',
                element: <Hooks/>,
            },  
            {
                path:'/clientes',
                element: <h1>Meus Clientes</h1>,
            },  
            {
                path:'/produtos',
                element: <h1>Meus Produtos</h1>,
            },  
        ]
    },
   
]);