
const BlogCard = ({blogs}) => {
    const {title, pic, paragraph, date} = blogs;
    return (
        <div className="flex justify-center items-center pt-10">
          <div className="card card-side bg-base-100 shadow-2xl">
            <figure><img src={blogs.pic} alt="Network error"/></figure>
            <div className="card-body">
                <h1>{blogs.date}</h1>
                <h2 className="card-title mt-4">{blogs.title}</h2>
                <p className="mt-2">{blogs.paragraph}</p>
                <div className="card-actions justify-end">
                </div>
            </div>
            </div>
        </div>
    );
};

export default BlogCard;