import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return(
        <>
          <RouterProvider router={routes}/>
          <ToastContainer />
        </>

  )
  
}


