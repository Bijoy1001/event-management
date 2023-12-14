
const Contact = () => {
    return (
        <div>
            <div className="flex justify-center items-center min-h-screen bg-base-200">
              
                <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                <form className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <input type="name" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Phone Number</span>
                    </label>
                    <input type="phone" placeholder="phone" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Write Your Text</span>
                    </label>
                    <textarea placeholder="Text" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
                    </div>
                
                
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Submite</button>
                    </div>
                </form>
                </div>
            </div>
            </div>
        
    );
};

export default Contact;