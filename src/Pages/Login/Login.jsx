import { Link } from "react-router-dom";

const Login = () => {
    
    const handlelogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        console.log(form.get('email'));
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                
              <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <h1 className="text-5xl font-bold pl-6 pt-4">Please Login!</h1>
                <form onSubmit={handlelogin} className="card-body">
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
                    <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="flex justify-center items-center pb-4">Do not have an account <Link className=" text-blue-700 pl-2" to="/register"> Register</Link></p>
                </div>
            </div>
            </div>
       
    );
};

export default Login;