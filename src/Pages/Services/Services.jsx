import { useLoaderData } from "react-router-dom";
import BlogCard from "../BlogCard/BlogCard";

const Services = () => {
    const blogs = useLoaderData ();
    console.log(blogs);

    return (
        <div>
            <div>
                <h1 className="flex items-center justify-center font-bold text-4xl pt-4">OUR ALL SERVICES</h1>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-8">
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

export default Services;