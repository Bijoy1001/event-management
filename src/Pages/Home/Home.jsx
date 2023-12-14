import img2 from "../../assets/img2.png"
import img3 from "../../assets/section.png"
import img4 from "../../assets/section2.png"
import { IoCameraOutline } from "react-icons/io5";
import { FaGlassCheers } from "react-icons/fa";
import { MdOutlineFoodBank } from "react-icons/md";
import { GiBalloons } from "react-icons/gi";
import { NavLink, useLoaderData } from "react-router-dom"
import BlogCard from "../BlogCard/BlogCard"


const Home = () => {
      
    return (
        <div>
            <div className=" hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/hZ4ZgVR/header.jpg)'}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-8 text-6xl font-bold">A good life is a collection of happy moments.</h1>
                <NavLink to='/service'>
                 <button className="btn btn-primary">LET'S CELEBRATE</button>
                </NavLink>
              </div>
            </div>
          </div>
           <div>
              <div className="a pl-20 ml-20 justify-center items-center grid grid-cols-2">
                 <img src={img2} alt="" />
                 <h2 className="text-4xl font-bold"> We take care of preparatin, <br /> You enjoy the celebration!</h2>
              </div>
         </div>
         <div className="pl-20 ml-20 justify-center items-center grid grid-cols-2">
             <div>
              <h1 className="font-bold text-xl pl-10">GET YOUR EVENT COVERED</h1>
              <p className="mt-6">The most beautiful thisgs are not associated with money;</p>
              <p className="pl-10"> they are memories and moments. </p>
              </div>
              <div>
                <img src={img3} alt="" />
              </div>
         </div>
         <div className="flex justify-center items-center mt-16">
           <h1 className="text-6xl font-bold">No-fuss event management <br /> to celebrate the big day</h1>
         </div>

         <div className="flex justify-center items-center m-10 pt-10 gap-12">
             <div>
                <IoCameraOutline className="text-6xl"></IoCameraOutline>
                <h1>OTHER SERViCES</h1>
                <p className="pt-2">And many more things that <br /> we can  offer you</p>
             </div>
             <div>
              <FaGlassCheers className="text-6xl"></FaGlassCheers>
              <h1>ENTERTAINMENT</h1>
              <p className="pt-2">Unforgettable entertainment, <br /> interesting programs</p>
             </div>
        
             <div>
                <MdOutlineFoodBank className="text-6xl"></MdOutlineFoodBank>
                <h1>FOOD & CATERING</h1>
                <p className="pt-2">The best food from the most <br /> famous  restaurants</p>
             </div>
             <div>
                <GiBalloons className="text-6xl"></GiBalloons>
                <h1>PERFECT VENUE</h1>
                <p className="pt-2">No one will arrange a better party or <br /> event than we</p>
             </div>
         </div>
         <div className="flex pt-14 justify-center items-center gap-20">
              <img src={img4} alt="" />
              <h1 className="text-4xl">Plan your event budget: <br />
              there should be only <br />
              goog surprises</h1>
         </div>
      
         
       </div>
    );
};

export default Home;