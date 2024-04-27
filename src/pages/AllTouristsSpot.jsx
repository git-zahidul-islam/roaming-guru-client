import { useLoaderData } from "react-router-dom";
import TravelCard from "../components/travelCard/TravelCard";

const AllTouristsSpot = () => {
    const loaderTravel = useLoaderData()
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 p-4">
            {
                loaderTravel.map(data =>
                    <TravelCard key={data._id} cardData={data}></TravelCard>)
            }
        </div>
    );
};

export default AllTouristsSpot;