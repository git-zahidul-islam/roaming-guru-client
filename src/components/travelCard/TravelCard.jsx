import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const TravelCard = ({ cardData }) => {
    const {_id, image, tourists_spot_name, average_cost, seasonality, travel_time, totalVisitors } = cardData;
    return (
        <div data-aos="fade-up" data-aos-delay="300" data-aos-once="true"  data-aos-duration="1000" className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-2">
            <div className="h-72 relative">
                <img className="w-full h-full" src={image} alt="" />
                <div className="absolute top-2">
                    <p className="p-2 bg-zinc-800 text-white">Season: {seasonality}</p>
                </div>
            </div>
            <div className="space-y-2 mt-2">
                <h1 className="text-xl font-bold">{tourists_spot_name}</h1>
                <p className="text-base font-medium text-slate-500">Total Visitor: {totalVisitors} /Person</p>
                <p className="text-base font-medium">Travel time: {travel_time} Days</p>
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

export default TravelCard;