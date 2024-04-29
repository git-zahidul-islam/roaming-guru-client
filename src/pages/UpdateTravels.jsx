// import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
import Swal from "sweetalert2";


const UpdateTravels = () => {
    const loaderData = useLoaderData()
    const { _id, image, tourists_spot_name, country_Name, location, average_cost, seasonality, travel_time, totalVisitors, name, email, description } = loaderData;
    const navigate = useNavigate()

    const handleUpdateData = (e) => {
        e.preventDefault()
        const form = e.target;

        const image = form.image.value;
        const tourists_spot_name = form.tourists_spot_name.value;
        const country_Name = form.country_Name.value;
        const location = form.location.value;
        const average_cost = form.average_cost.value;
        const seasonality = form.seasonality.value;
        const travel_time = form.travel_time.value;
        const totalVisitors = form.totalVisitors.value;
        const name = form.name.value;
        const email = form.email.value;
        const description = form.description.value;
        const allData = { image, tourists_spot_name, country_Name, location, average_cost, seasonality, travel_time, totalVisitors, name, email, description }
        // console.log("added data for check", allData);

        fetch(`http://localhost:5000/travels/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0){
                    Swal.fire({
                        title: "Updated",
                        text: "Your file has been Updated",
                        icon: "success"
                    });
                }
                console.log(data);
                navigate('/myList')
            })

    }


    return (
        <div>
            <section className="">
                <form onSubmit={handleUpdateData} className="container flex flex-col mx-auto space-y-12">
                    <fieldset className="grid grid-cols-4 gap-6 p-4 rounded-md">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-medium">Update Your Tourist Place</p>
                            <p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="image" className="text-sm">Image URL</label>
                                <input id="image" type="text" name="image" defaultValue={image} placeholder="image" className="w-full p-2 border-2 border-black" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="tourists_spot_name" className="text-sm">Tourists spot name</label>
                                <input id="tourists_spot_name" type="text" name="tourists_spot_name" defaultValue={tourists_spot_name} placeholder="Tourists spot name" className="w-full p-2 border-2 border-black" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="country_Name" className="text-sm">Country Name</label>
                                {/* <input id="country_Name" type="text" name="country_Name" placeholder="Country Name" className="w-full p-2 border-2 border-black" /> */}
                                <select name="country_Name" defaultValue={country_Name} className="w-full p-2 border-2 border-black">
                                    <option>Bangladesh</option>
                                    <option>Thailand</option>
                                    <option>Indonesia</option>
                                    <option>Malaysia</option>
                                    <option>Vietnam</option>
                                    <option>Cambodia</option>
                                </select>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="location" className="text-sm">Location</label>
                                <input id="location" type="text" name="location" defaultValue={location} placeholder="location" className="w-full p-2 border-2 border-black" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="average_cost" className="text-sm">Average cost</label>
                                <input id="average_cost" type="number" name="average_cost" defaultValue={average_cost} placeholder="Average cost" className="w-full p-2 border-2 border-black" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="seasonality" className="text-sm">Seasonality</label>
                                {/* <input id="seasonality" type="text" name="seasonality" placeholder="Seasonality" className="w-full p-2 border-2 border-black" /> */}
                                <select name="seasonality" defaultValue={seasonality} className="w-full p-2 border-2 border-black">
                                    <option>Summer</option>
                                    <option>Winter</option>
                                </select>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="travel_time" className="text-sm">Travel Time</label>
                                <input id="travel_time" type="number" name="travel_time" defaultValue={travel_time} placeholder="Travel time" className="w-full p-2 border-2 border-black" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="totalVisitorsPerYear" className="text-sm">Total visitor Pre Year</label>
                                <input id="totalVisitors" type="number" name="totalVisitors" defaultValue={totalVisitors} placeholder="total Visitors Per Year" className="w-full p-2 border-2 border-black" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="name" className="text-sm">Name</label>
                                <input id="name" type="text" name="name" placeholder="name" defaultValue={name} disabled className="w-full p-2 border-2 border-black" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">Email</label>
                                <input id="email" type="email" name="email" defaultValue={email} disabled placeholder="email" className="w-full p-2 border-2 border-black" />
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="description" className="text-sm">Description</label>
                                <textarea id="description" type="description" name="description" defaultValue={description} placeholder="write Short description" className="w-full p-2 border-2 border-black resize-none h-20" />
                            </div>

                            <div className="col-span-full">
                                <input className="btn btn-primary w-full" type="submit" value="Update Tourist Spot" />
                            </div>
                        </div>
                    </fieldset>
                </form>
            </section>  
        </div>
    );
};

export default UpdateTravels;