import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../pages/Home";
import Registration from "../pages/Registration";
import Login from "../pages/Login";
import AllTouristsSpot from "../pages/AllTouristsSpot";
import AddTouristsSpot from "../pages/AddTouristsSpot";
import MyList from "../pages/MyList";
import ErrorPage from "../pages/ErrorPage";
import PrivateRouter from "./PrivateRouter";
import TravelCardDetails from "../pages/TravelCardDetails";
import UpdateTravels from "../pages/UpdateTravels";
import Countries from "../components/countries/Countries";
import CountriesData from "../pages/CountriesData";






export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://roaming-guru-server.vercel.app/travels')
            },
            {
                path: '/allTouristsSpot',
                element: <AllTouristsSpot></AllTouristsSpot>,
                loader: () => fetch('https://roaming-guru-server.vercel.app/travels')
            },
            {
                path: 'allTouristsSpot/:id',
                element: <PrivateRouter><TravelCardDetails></TravelCardDetails></PrivateRouter>,
                loader: ({ params }) => fetch(`https://roaming-guru-server.vercel.app/travels/${params.id}`)
            },
            {
                path: '/updateTravels/:id',
                element: <UpdateTravels></UpdateTravels>,
                loader: ({ params }) => fetch(`https://roaming-guru-server.vercel.app/travels/${params.id}`)
            },
            {
                path: '/countries',
                element: <Countries></Countries>,
                loader: () => fetch('https://roaming-guru-server.vercel.app/homeTravel')
            },
            {
                path: '/travels/countryName/:countryName',
                element: <CountriesData></CountriesData>,
                loader: ({ params }) => fetch(`https://roaming-guru-server.vercel.app/travels/countryName/${params.countryName}`)
            },
            {
                path: '/addTouristsSpot',
                element: <PrivateRouter><AddTouristsSpot></AddTouristsSpot></PrivateRouter>
            },
            {
                path: '/myList',
                element: <PrivateRouter><MyList></MyList></PrivateRouter>
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