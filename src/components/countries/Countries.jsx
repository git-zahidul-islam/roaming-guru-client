import { Link } from "react-router-dom";



const Countries = ({ data }) => {
    const { country_Name, description, image } = data;

    return (
        <div>
            <Link to={`/travels/countryName/${country_Name}`}>
                <div className="h-56 relative rounded-lg hover:scale-105 duration-700">
                    <img className="h-full w-full rounded-lg" src={image} alt="" />
                    <div className="p-4 absolute top-0 flex flex-col justify-center items-center h-full w-full bg-[#19193588] text-[#ffffffe1] rounded-lg">
                        <h1 className="text-2xl font-bold text-white">{country_Name}</h1>
                        <p className="text-xs">{description}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Countries;