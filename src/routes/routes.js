import { createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs/aboutUs";
import Categories from "../pages/Categories/categories";
import Layout from "../Components/Layout/Layout";
import Layout2 from "../Components/Layout2/Layout2";
import Login from "../pages/Login/login";
const Router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
        {
            index:true ,
            element:<Home/>,
        },
        {
            path:"about-us",
            element:<AboutUs/>
        },
        {
            path:"categories/:categoryId",
            element:<Categories/>
        },
        ]
    },
    {
        path:"/",
        element:<Layout2/>,
        children:[
        {
            path:"login",
            element:<Login/>
        }
        ]
    }
    
])
export default Router;