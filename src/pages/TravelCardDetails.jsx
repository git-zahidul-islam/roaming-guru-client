import { useLoaderData } from "react-router-dom";
import { FaLocationArrow } from "react-icons/fa";
import { GiSpookyHouse } from "react-icons/gi";

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
                        <button className="py-2 flex gap-2 text-lg"><GiSpookyHouse size={25} className="text-green-600" />{country_Name}</button>
                        <p className="flex gap-2 items-center text-lg"><FaLocationArrow className="text-green-600"></FaLocationArrow>{location}</p>
                        <p className="text-lg">Travel Season: {seasonality}</p>
                        <div>
                            <table className="w-full">
                                <tbody>
                                    <tr>
                                        <th>Field Name</th>
                                        <th>Value</th>
                                    </tr>
                                    <tr>
                                        <td>Name</td>
                                        <td>{name}</td>
                                    </tr>
                                    <tr>
                                        <td>Email</td>
                                        <td>{email}</td>
                                    </tr>
                                    <tr>
                                        <td>Travel Time</td>
                                        <td>{travel_time} Days</td>
                                    </tr>
                                    <tr>
                                        <td>Total Visitor Year</td>
                                        <td>{totalVisitors} +People</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-2">
                            <h3 className="text-lg font-bold text-white py-2 bg-green-400">Description</h3>
                            <div className="">
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