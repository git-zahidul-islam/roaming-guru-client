import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";



const Registration = () => {
    const { createUserWithEmail } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleRegistration = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoUrl = form.photoUrl.value;
        console.log(name, email, password, photoUrl);

        createUserWithEmail(email, password)
            .then(result => {
                console.log(result.user);
                
                // profileUpdate(result.user, {
                //     displayName: name,
                //     photoURL: image,
                // })
                //     .then(console.log("photo upload"))
                //     .catch(error => console.error(error))
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
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" placeholder="name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="photoUrl" placeholder="photoUrl" name="photoUrl" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            {/* <input type="submit" value="Registration" /> */}
                            <button className="btn btn-primary">Registration</button>
                            <p className="px-6 text-base text-center ">Do you have an account
                                <Link to={'/login'} className="ps-2 text-green-500">Login</Link>.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;