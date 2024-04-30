import { Link } from "react-router-dom";
import { IoMdLocate } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";


const CountryCard = ({ data }) => {
    const { _id, image, country_Name, tourists_spot_name, average_cost, seasonality, location , description } = data;

    return (
        <div className="shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-lg p-2">
            <div className="h-72 relative">
                <img className="w-full h-full" src={image} alt="" />
                <div className="absolute top-2">
                    <p className="p-2 bg-zinc-800 text-white">Season: {seasonality}</p>
                </div>
            </div>
            <div className="space-y-2 mt-2">
                <div className="flex justify-between">
                    <h1 className="text-xl font-bold">{tourists_spot_name}</h1>
                    <p className="text-xl font-bold flex gap-2 items-center"><IoMdLocate size={25} className="text-green-500"></IoMdLocate>{country_Name}</p>
                </div>
                <p className="text-base font-medium text-slate-500 flex items-center gap-1"><MdLocationOn className="text-green-500" size={25}></MdLocationOn>{location}</p>
                <div>
                    <h1 className="text-xl font-bold">Description</h1>
                    <p className="text">{description}</p>
                </div>
                <div className="flex gap-2">
                    <p className="w-1/2 py-3 text-gray-500 font-semibold text-xl">{average_cost}/<span className="text-red-500">$</span></p>
                    <Link className="w-1/2 text-center py-3 bg-[#d83f31e9] text-white rounded-lg" to={`/allTouristsSpot/${_id}`}>
                        <p>View details</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CountryCard;