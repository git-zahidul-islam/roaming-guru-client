/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";



const CountriesData = () => {
    const dataLoader = useLoaderData()
    const mapData = dataLoader.map(data => data.country_Name)
    const [showData,setShowData] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/travels/${mapData}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setShowData(data)
        })
    }, [])

    console.log(showData);

    return (
        <div>
           {
            showData.map(data => <div key={data._id}>
                <img src={data.image} alt="" />
            </div>)
           }
        </div>
    );
};

export default CountriesData;