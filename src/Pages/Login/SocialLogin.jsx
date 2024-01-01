import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const SocialLogin = () => {

    const {user, googleLogin} = useContext(AuthContext);

    const handleSocialLogin = (media) => {
        media()
        .then(res => console.log(res))
    }

    return (
        <>
             <div className="divider"> Continue with</div>
             <div className=" flex items-center justify-center pb-4">
                <button 
                onClick={()=> handleSocialLogin(googleLogin)}
                 className=" btn btn-primary btn-circle btn-outline">
                    Google
                </button>
             </div>
        </>
    );
};

export default SocialLogin;