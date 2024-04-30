import { Link } from "react-router-dom";
import { FaLink } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const HomeCard = ({ travelData }) => {
    const { _id, image, tourists_spot_name } = travelData;
    
    return (

        <div data-aos="flip-up" data-aos-duration="1200" data-aos-delay="200"
         className="shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-md">
            <div className="h-44 relative group">
                <img className="w-full h-full rounded-md" src={image} alt="" />
                <div className="absolute flex flex-col items-center justify-center top-0 w-full h-full bg-[#34c47c8f] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-md">
                    <h1 className="text-white text-xl font-bold">{tourists_spot_name}</h1>
                    <Link className="text-white rounded-lg flex flex-col items-center bg-[#d83f31dc] p-1" to={`/allTouristsSpot/${_id}`}>
                        <button>View Details</button>
                        <FaLink></FaLink>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;