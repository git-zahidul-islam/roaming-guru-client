import { useLoaderData } from "react-router-dom";
import HomeCard from "../components/homeCard/HomeCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { RotatingLines } from "react-loader-spinner";
import Slider from "../components/slider/Slider";
import Extra2 from "../components/extra2/Extra2";
import Extra1 from "../components/extra1/Extra1";
import Countries from "../components/countries/Countries";
import { Fade } from "react-awesome-reveal";


const Home = () => {
    const { loading } = useContext(AuthContext)
    const travelData = useLoaderData()
    const [homeData, setHomeData] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/homeTravel')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setHomeData(data)
            })
    }, [])
    console.log(homeData);

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
        <div className="space-y-10">
            <div className="lg:h-[80vh] md:h-[70vh] h-[50vh] w-full flex items-center justify-center">
                <Slider></Slider>
            </div>
            <div className="min-h-[60vh] container mx-auto flex flex-col justify-center items-center mt-5 space-y-4">
                <Fade duration={1000} delay={500} direction="down">
                    <h1 className="text-2xl font-bold">Tourists Spots</h1>
                </Fade>
                <Fade duration={1000} delay={500} direction="down">
                    <p className="text-center text-gray-600">Explore the enchanting beauty of Kyoto's historic temples and tranquil gardens, where <br /> timeless elegance meets serene tranquility.</p>
                </Fade>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 py-4">
                    {
                        travelData.slice(0, 6).map(data => <HomeCard key={data._id} travelData={data}></HomeCard>)
                    }
                </div>
            </div>
            <div className="container mx-auto lg:px-0 md:px-0 px-2">
                <Fade duration={1500} delay={100} direction="down" >
                    <h1 className="text-center text-2xl font-bold">Countries</h1>
                </Fade>
                <Fade duration={1200} delay={200} direction="down">
                <p className="text-center text-gray-600">Explore the enchanting beauty of Kyoto's historic temples and tranquil gardens, where <br /> timeless elegance meets serene tranquility.</p>
                </Fade>
                {/* <Countries></Countries> */}
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-5">
                    {
                        homeData.map(data => <Countries key={data._id} data={data}></Countries>)
                    }
                </div>
            </div>
            <div>
                <Extra1></Extra1>
            </div>
            <div className="w-full bg-[#34c47cd1]">
                <Extra2></Extra2>
            </div>
        </div>
    );
};

export default Home;