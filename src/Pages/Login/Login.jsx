import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const Login = () => {
    
    const {signin} = useAuth();

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value
        const password = event.target.password.value
        // console.log(email, name, password);


        if (password.length < 6){
            toast.error('Password must be at least 6 characters');
            return;
        }


        signin(email, password)
        .then(res => console.log(res.user))
        .catch(error => console.log(error))


    }
    
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                
              <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <h1 className="text-5xl font-bold pl-6 pt-4">Please Login!</h1>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="flex justify-center items-center pb-4">Do not have an account <Link className=" text-blue-700 pl-2" to="/register"> Register</Link></p>
                 <SocialLogin></SocialLogin>
                </div>
                              

            </div>
            </div>
       
    );
};

export default Login;