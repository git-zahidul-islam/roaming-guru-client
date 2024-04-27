import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="min-h-[60vh]">
            <div className="hero min-h-[85vh] flex items-center justify-center">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl lg:block md:hidden hidden"/>
                    <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                                <p className="px-6 text-base text-center ">Don't have an account yet?
                                    <Link to={'/registration'} className="ps-2 text-green-500">Registration</Link>.
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;