import { useLoaderData } from "react-router-dom";
import CountryCard from "../components/countryCard/CountryCard";



const CountriesData = () => {
    const dataLoader = useLoaderData()
    // console.log(dataLoader)

    return (
        <div className="p-5 grid md:grid-cols-3 mb-10">
            {
                dataLoader.map(data => <CountryCard key={data._id} data={data}></CountryCard>)
            }
        </div>
    );
};

export default CountriesData;