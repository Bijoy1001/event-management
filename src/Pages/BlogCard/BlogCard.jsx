
const BlogCard = ({blogs}) => {
    const {title, pic, paragraph,date} = blogs;
    return (
        <div className="flex justify-center items-center mt-4">
          <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={blogs.pic} alt="Movie"/></figure>
            <div className="card-body">
                <h1>{blogs.date}</h1>
                <h2 className="card-title">{blogs.title}</h2>
                <p>{blogs.paragraph}</p>
                <div className="card-actions justify-end">
                </div>
            </div>
            </div>
        </div>
    );
};

export default BlogCard;