import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import { MdOutlineDangerous } from "react-icons/md";



const Registration = () => {
    const { createUserWithEmail } = useContext(AuthContext)
    const navigate = useNavigate()
    const [error,setError] = useState(null)

    const handleRegistration = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoUrl = form.photoUrl.value;
        console.log(name, email, password, photoUrl);

        if(name.length < 0){
            setError('Type Full Name')
            return
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
            setError('Type Valid Email')
            return
        }

        if (password.length < 1) {
            setError('Type password')
            return;
        }
        if (password.length < 6) {
            setError('password minimum 6 character')
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setError('Password must have an Uppercase letter')
            return;
        }
        if (!/[a-z]/.test(password)) {
            setError('Password must have a Lowercase letter')
            return;
        }

        if (!/\.(jpg|jpeg|png|gif|bmp)$/i.test(photoUrl)){
            setError("Please Input valid image link")
            return;
        }



        createUserWithEmail(email, password)
            .then(result => {
                updateProfile(result.user,{
                    displayName: name,
                    photoURL: photoUrl,
                })
                .then(console.log("Profile photo upload"))
                .catch(error => console.error(error))

                toast.success("Registration Successful")
                navigate('/')
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className="hero min-h-[65vh]">
            <div className="hero-content flex-col items-center min-h-[85vh] lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold flex gap-2">Registration <img className="lg:block md:block hidden w-14 h-14" src="https://img.icons8.com/?size=256&id=z6yts2rWqz4y&format=png" alt="" /></h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegistration} className="card-body">
                        {
                            error &&
                            <div className="border-[1px] border-red-300 bg-red-100 p-2 flex gap-1">

                                <MdOutlineDangerous  size={21} className="text-red-700 mt-[2px]" />
                                <div>
                                    <p>{error}</p>
                                </div>
                            </div>
                        }

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" placeholder="name" name="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered"  />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered"/>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="photoUrl" placeholder="photoUrl" name="photoUrl" className="input input-bordered"/>
                        </div>
                        <div className="form-control mt-6">
                            {/* <input type="submit" value="Registration" /> */}
                            <button className="p-2 text-white/90 rounded-md bg-[#DB5043] ">Registration</button>
                            <p className="px-6 text-base text-center ">Do you have an account
                                <Link to={'/login'} className="ps-2 text-[#DB5043]">Login</Link>.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;