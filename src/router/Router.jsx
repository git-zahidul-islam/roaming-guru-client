import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../pages/Home";
import Registration from "../pages/Registration";
import Login from "../pages/Login";
import AllTouristsSpot from "../pages/AllTouristsSpot";
import AddTouristsSpot from "../pages/AddTouristsSpot";
import MyList from "../pages/MyList";
import ErrorPage from "../pages/ErrorPage";






export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/travels')
            },
            {
                path: '/allTouristsSpot',
                element: <AllTouristsSpot></AllTouristsSpot>,
                loader: () => fetch('http://localhost:5000/travels')
            },
            {
                path: '/addTouristsSpot',
                element: <AddTouristsSpot></AddTouristsSpot>
            },
            {
                path: '/myList',
                element: <MyList></MyList>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])