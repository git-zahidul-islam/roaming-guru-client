import { useLoaderData } from "react-router-dom";


const TravelCardDetails = () => {
    const loaderTravel = useLoaderData()
    const { image, tourists_spot_name, country_Name, location, average_cost, seasonality, travel_time, totalVisitors, name, email, description } = loaderTravel;

    console.log(loaderTravel);
    return (
        <div className="font-[sans-serif]">
            <div className="p-6 lg:max-w-7xl max-w-2xl max-lg:mx-auto">
                <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12">
                    <div className="lg:col-span-3 bg-gray-100 w-full lg:sticky top-0 text-center">
                        <img src={image} alt="Product" className="rounded object-cover w-full h-full" />
                    </div>
                    <div className="lg:col-span-2 space-y-3">
                        <h2 className="text-2xl font-extrabold text-gray-800">{tourists_spot_name}</h2>
                        <div className="flex flex-wrap gap-4 mt-4">
                            <p className="text-gray-800 text-xl font-bold">{average_cost}$ Dollar</p>
                        </div>
                        <div className="flex gap-2">
                            <button className="p-2 bg-green-300">{country_Name}</button>
                            <button className="p-2 bg-green-300">{seasonality}</button>
                        </div>
                        <p className="">{location}</p>
                        <div className="bg-green-100">
                            <p>Name: {name}</p>
                            <p>Email: {email}</p>
                            <p>Travel Times: {travel_time} Days</p>
                            <p>Total Visitor: {totalVisitors}+ People</p>
                            
                        </div>
                        <div className="mt-2">
                            <h3 className="text-lg font-bold text-gray-800">Description</h3>
                            <div>
                                <p>{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TravelCardDetails;