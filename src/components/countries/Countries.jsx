import { Link } from "react-router-dom";



const Countries = ({ data }) => {
    const { country_Name, description, image } = data;

    return (
        <div>
            <Link to={`/homeTravel/${country_Name}`}>
                <div className="h-60 relative">
                    <img className="h-full w-full" src={image} alt="" />
                    <div className="p-4 absolute top-0 flex flex-col justify-center items-center h-full w-full">
                        <h1 className="text-2xl font-bold">{country_Name}</h1>
                        <p className="text-xs">{description}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Countries;