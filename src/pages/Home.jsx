import { useLoaderData } from "react-router-dom";
import Footer from "../components/footer/Footer";
import HomeCard from "../components/homeCard/HomeCard";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { RotatingLines } from "react-loader-spinner";
import Slider from "../components/slider/Slider";
import Extra2 from "../components/extra2/Extra2";
import Extra1 from "../components/extra1/Extra1";


const Home = () => {
    const {loading} = useContext(AuthContext)
    const travelData = useLoaderData()
    if(loading){
        return(
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
        <div className="">
            <div className="lg:h-[80vh] md:h-[70vh] h-[50vh] w-full flex items-center justify-center">
                <Slider></Slider>
            </div>
            <div className="min-h-[60vh] container mx-auto flex justify-center items-center">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 py-4">
                    {
                        travelData.slice(0,6).map(data => <HomeCard key={data._id} travelData={data}></HomeCard>)
                    }
                </div>
            </div>
            <div className="container mx-auto bg-green-200 h-[45vh]">
                <h1>this is Countries Section</h1>
            </div>
            <div className="">
                <Extra1></Extra1>
            </div>
            <div className="w-full from-teal-700 via-teal-600 to-teal-700">
                <Extra2></Extra2>
            </div>
        </div>
    );
};

export default Home;