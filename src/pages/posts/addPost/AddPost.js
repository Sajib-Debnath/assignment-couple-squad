import React from 'react';
import { toast } from 'react-hot-toast';

const AddPost = ({ setIsSubmitAble, isSubmitAble, refetch }) => {

    // const [post, setPost] = useState(null)

    const handelAddUser = event => {
        event.preventDefault();

        const form = event.target;
        const title = form.title.value
        const description = form.description.value
        const newPost = {
            title,
            description
        }
        setIsSubmitAble(false)
        console.log(newPost)

        fetch('https://64cb8f7f700d50e3c7061cf4.mockapi.io/api/posts', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newPost)
        })
            .then(res => res.json())
            .then((data) => {
                if (data?.id) {
                    toast.success("Post is added successfully .")
                    refetch()
                }
                else {
                    toast.error("Something went wrong")
                }
            })
            .catch(err => console.error(err))
    }


    return (
        <>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">This modal works with a hidden checkbox!</p>

                    <form action="" onSubmit={handelAddUser}>
                        <label className="block mb-8 ">
                            <span className="mb-3 after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                News Title
                            </span>
                            <input required type="text" name="title" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Write the news title" />
                        </label>

                        <label className="block mb-8">
                            <span className="mb-3 after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                News Description
                            </span>
                            <textarea required name='description' className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1textarea textarea-bordered" placeholder="Write here News Description"></textarea>
                        </label>

                        <label className="block mb-8">
                            <input type="submit" className='btn w-full' value="Submit" />
                        </label>


                    </form>

                    {/* <div classNameName="modal-action">
                        <label htmlFor="my_modal_6" className="btn">Close!</label>
                    </div> */}
                </div>
            </div>
        </>
    );
};

export default AddPost;