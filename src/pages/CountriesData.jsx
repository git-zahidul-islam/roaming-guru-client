/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";



const CountriesData = () => {
    const dataLoader = useLoaderData()
    console.log(dataLoader);
    // const mapData = dataLoader.map(data => data.country_Name)
    // const [showData,setShowData] = useState([])

    // useEffect(() => {
    //     fetch(`http://localhost:5000/travels/`)
    //     .then(res => res.json())
    //     .then(data => {
    //         // console.log(data);
    //         setShowData(data)
    //     })
    // }, [])

    // console.log("useEffect data",showData);
    // console.log("loader data",mapData);

    return (
        // <div>
        //    {
        //     showData.map(data => <div key={data._id}>
        //         <img src={data.image} alt="" />
        //     </div>)
        //    }
        // </div>
        <div>
            <p>country data</p>
        </div>
    );
};

export default CountriesData;