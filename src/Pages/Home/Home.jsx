import slide1 from "../../assets/Header2.jpg"
import slide2 from "../../assets/header.jpg"
import img2 from "../../assets/img2.png"
import img3 from "../../assets/section.png"
import img4 from "../../assets/section2.png"
import { IoCameraOutline } from "react-icons/io5";
import { FaGlassCheers } from "react-icons/fa";
import { MdOutlineFoodBank } from "react-icons/md";
import { GiBalloons } from "react-icons/gi";
import { useLoaderData } from "react-router-dom"
import BlogCard from "../BlogCard/BlogCard"


const Home = () => {
       const blogs = useLoaderData ();
        console.log(blogs);

    return (
        <div>
            <div className="carousel w-full">
              <div id="slide1" className="carousel-item relative w-full">
                <img src={slide2} className="w-full h-5/6" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide4" className="btn btn-circle">❮</a> 
                  <a href="#slide2" className="btn btn-circle">❯</a>
               </div>
              </div> 
              <div id="slide2" className="carousel-item relative w-full">
                <img src={slide1} className="w-full h-5/6" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide1" className="btn btn-circle">❮</a> 
                  <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
              </div> 
            </div>
           <div>
              <div className="pl-20 ml-20 justify-center items-center grid grid-cols-2">
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
         <div>
              <h4 className="flex justify-center items-center font-bold mt-14 text-red-700 text-xl">OUR BLOG</h4>
              <h1 className="flex justify-center items-center mt-4 text-6xl">Get Inspired & Celebrate</h1>
         </div>
         <div>
             {
              blogs.map(blog => <BlogCard
              key={blog.id}
              blogs ={blog}
              ></BlogCard>)
             }
         </div>
       </div>
    );
};

export default Home;