import { useLoaderData } from "react-router-dom";


const TravelCardDetails = () => {
    const loaderTravel = useLoaderData()
    const { image, tourists_spot_name, country_Name, location, average_cost, seasonality, travel_time, totalVisitors, name, email, description } = loaderTravel;

    console.log(loaderTravel);
    return (
        <div className="container mx-auto py-5 lg:px-0 md:px-0 px-2 space-y-5">
            <div className="flex justify-between items-center bg-amber-50 px-0 py-4">
                <div>
                    <h1>{tourists_spot_name}</h1>
                    <p>{location}</p>
                </div>
                <p>Total Visitor Per Year: {totalVisitors}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
                <div className="shadow-xl">
                    <img src={image} alt="travel card image" />
                </div>
                <div className="bg-green-100 shadow-xl">
                    <p>{seasonality}</p>
                    <p>{country_Name}</p>
                </div>
            </div>
            <div className="shadow-2xl bg-slate-300">
                <p>{description}</p>
            </div>
        </div>
    );
};

export default TravelCardDetails;