import { useLoaderData } from "react-router-dom";
import Footer from "../components/footer/Footer";
import HomeCard from "../components/homeCard/HomeCard";


const Home = () => {
    const travelData = useLoaderData()
    return (
        <div className="">
            <div className="h-[50vh] w-full bg-green-400 flex items-center justify-center">
                <h1>this is banner</h1>
            </div>
            <div className="min-h-[60vh] container mx-auto bg-green-300 flex justify-center items-center">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 p-4">
                    {
                        travelData.slice(0,7).map(data => <HomeCard key={data._id} travelData={data}></HomeCard>)
                    }
                </div>
            </div>
            <div className="bg-green-200 h-[45vh]">
                <h1>this is Countries Section</h1>
            </div>
            <div className="h-[50vh] bg-green-100 flex justify-center items-center">
                <h1>extra section 1</h1>
            </div>
            <div className="h-[50vh] bg-green-200 flex justify-center items-center">
                <h1>extra section 2</h1>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;