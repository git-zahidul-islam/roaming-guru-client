import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { FaEdit } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";


const MyList = () => {
    const { user } = useContext(AuthContext)
    const [myListData, setMyListData] = useState([])


    useEffect(() => {
        fetch(`https://roaming-guru-server.vercel.app/myList/${user?.email}`)
            .then(res => res.json())
            .then((data) => {
                // console.log(data);
                setMyListData(data)
            })
    }, [user])

    const handleDelete = (id) => {
        // console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                console.log("delete conform");
                fetch(`https://roaming-guru-server.vercel.app/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = myListData.filter(data => data._id !== id);
                            setMyListData(remaining)
                        }
                    })
            }
        });

    }

    return (
        <div className="min-h-[56vh]">
            <div className="container p-2 mx-auto sm:p-4 text-gray-800 mt-5">
                <h2 className="text-2xl font-semibold leading-tight p-2 bg-[#34C47B] text-white">My Added Travel List</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm">
                        <thead className="bg-gray-300">
                            <tr>
                                <th className="p-3">Country</th>
                                <th className="p-3">Visiting Place</th>
                                <th className="p-3">Location</th>
                                <th className="p-3">Average Cost</th>
                                <th className="p-3">Edit</th>
                                <th className="p-3">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myListData.map(data => <tr key={data._id}>
                                    <td className="py-2 text-center">{data.tourists_spot_name}</td>
                                    <td className="py-2 text-center">{data.country_Name}</td>
                                    <td className="py-2 text-center">{data.location}</td>
                                    <td className="py-2 text-center">{data.average_cost}</td>
                                    <td className="py-2 text-center"><Link to={`/updateTravels/${data._id}`}><button><FaEdit className="text-green-500" size={20} /></button></Link></td>
                                    <td className="py-2 text-center"><button onClick={() => handleDelete(data._id)}><MdOutlineDeleteForever className="text-red-600" size={25} /></button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyList;