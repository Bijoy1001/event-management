
const BlogCard = ({blogs}) => {
    const {title, pic, paragraph, amount } = blogs;
    return (
        <div className="flex justify-center  pt-6">
         <div>
              <div className=" card card-compact w-96 bg-base-100 shadow-xl">
           <figure><img src={blogs.pic} alt="Shoes" /></figure>
           <div className="card-body">
            <h2 className="card-title">{blogs.title}</h2>
            <p>{blogs.paragraph}</p>
            <div className="card-actions justify-start">
              <p>{blogs.amount}</p>
            </div>
          </div>
         </div>
       </div>
        </div>
    );
};

export default BlogCard;