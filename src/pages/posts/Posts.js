import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Loading from '../../components/Loading';
import { Link } from 'react-router-dom';
import AddPost from './addPost/AddPost';

const Posts = () => {

    const [isSubmitAble, setIsSubmitAble] = useState(true);

    const { data: posts = [], isLoading, refetch } = useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            const res = await fetch(`https://64cb8f7f700d50e3c7061cf4.mockapi.io/api/posts`);
            const data = await res.json();
            return data;
        },
    });


    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div className=''>
            <div className='w-full'>
                <label onClick={() => { setIsSubmitAble(true) }} htmlFor="my_modal_6" className="btn mb-5 p-5 grid justify-items-center bg-slate-500 w-1/6">Add Post</label>
            </div>

            <div className='grid lg:grid-cols-3 grid-cols-1 gap-10'>
                {
                    posts.map(postItem =>
                        <div className="card w-96 bg-base-100 shadow-xl my-5">
                            <figure><img src={postItem.cover} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{postItem?.title.slice(0, 20) + ' ...'}</h2>
                                <p>
                                    {
                                        postItem?.description.slice(0, 100) + ' ....'
                                    }
                                </p>
                                <div className="card-actions justify-end">
                                    <Link to={`/posts/${postItem?.id}`}><button className="btn btn-primary">Read More</button> </Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>


            {
                isSubmitAble &&
                <AddPost
                    setIsSubmitAble={setIsSubmitAble}
                    isSubmitAble={isSubmitAble}
                    refetch={refetch}
                />
            }
        </div>
    );
};

export default Posts;