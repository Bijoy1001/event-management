import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const Register = () => {
    
    const {createUser} = useAuth();

    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value
        // console.log(email, name, password);


        if (password.length < 6){
            toast.error('Password must be at least 6 characters');
            return;
        }


        createUser(email, password)
        .then(res => console.log(res.user))
        .catch(error => console.log(error))


    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                  <h1 className="text-5xl font-bold pl-6 pt-4">Please Register!</h1>
                  <form onSubmit={handleSubmit} className="card-body">
                  <div className="form-control">
                      <label className="label">
                          <span className="label-text">Your Name</span>
                      </label>
                      <input type="name" name="name" placeholder="Your Name" className="input input-bordered" required />
                      </div>
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
                      
                      </div>
                      <div className="form-control mt-6">
                      <button className="btn btn-primary">Register</button>
                      </div>
                  </form>
                  <p className="flex justify-center items-center pb-4">Already you have an account then <Link className=" text-blue-700 pl-2" to="/login"> Login</Link></p>
                   <SocialLogin></SocialLogin>
                  </div>
                 

              </div>
        </div>
    );
};

export default Register;