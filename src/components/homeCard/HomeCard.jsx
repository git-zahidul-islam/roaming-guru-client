import { Link } from "react-router-dom";


const HomeCard = ({ travelData }) => {
    const { _id, image, tourists_spot_name, average_cost, seasonality, travel_time, totalVisitors } = travelData;

    return (
        // <div className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-2">
        //     <div className="h-72 relative">
        //         <img className="w-full h-full" src={image} alt="" />
        //         <div className="absolute top-2">
        //             <p className="p-2 bg-zinc-800 text-white">Season: {seasonality}</p>
        //         </div>
        //     </div>
        //     <div className="space-y-2 mt-2">
        //         <h1 className="text-xl font-bold">{tourists_spot_name}</h1>
        //         <p className="text-base font-medium text-slate-500">Total Visitor: {totalVisitors} /Person</p>
        //         <p className="text-base font-medium">Travel time: {travel_time}</p>
        //         <div className="flex gap-2">
        //             <p className="w-1/2 py-3 text-green-500 font-semibold text-xl">{average_cost} taka</p>
        //             <Link className="w-1/2 text-center py-3 bg-green-500" to={`/allTouristsSpot/${_id}`}>
        //                 <p>View details</p>
        //             </Link>
        //         </div>
        //     </div>
        // </div>
        <div className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-md">
            <div className="h-44 relative group">
                <img className="w-full h-full rounded-md" src={image} alt="" />
                <div className="absolute flex flex-col items-center justify-center top-0 w-full h-full bg-[#10e33380] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-md">
                    <h1 className="text-white text-xl font-bold">{tourists_spot_name}</h1>
                    <Link className="bg-black text-white rounded-lg p-1" to={`/allTouristsSpot/${_id}`}>
                            <button>View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;