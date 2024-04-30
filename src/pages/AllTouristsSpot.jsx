import { useLoaderData } from "react-router-dom";
import TravelCard from "../components/travelCard/TravelCard";
import { RotatingLines } from "react-loader-spinner";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const AllTouristsSpot = () => {
    const { loading } = useContext(AuthContext)
    const loaderTravel = useLoaderData()

    if (loading) {
        return (
            <div className='flex justify-center items-center h-[calc(100vh-180px)]'>
                <RotatingLines
                    visible={true}
                    height="130"
                    width="130"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper"
                />
            </div>
        )
    }
    return (
        <div>
            <div className="flex justify-center ">
                <h1>Sorting</h1>
                <select className="w-[100px] border-2 rounded-sm px-2 border-red-500">
                    <option value="price">Price</option>
                </select>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 p-4">
                {
                    loaderTravel.map(data =>
                        <TravelCard key={data._id} cardData={data}></TravelCard>)
                }
            </div>
        </div>

    );
};

export default AllTouristsSpot;