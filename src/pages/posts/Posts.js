import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../components/Loading';
import { Link } from 'react-router-dom';

const Posts = () => {
    const { data: posts = [], isLoading } = useQuery({
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
            {
                posts.map(postItem =>
                    <div className="card lg:card-side bg-base-100 shadow-xl mb-20">
                        <figure>
                            <img src={postItem.cover} alt={postItem.title} />
                        </figure>
                        <div className="card-body w-2/3">
                            <h2 className="card-title">New album is released!</h2>
                            <p>{postItem.description}.</p>
                            <div className="card-actions justify-end">
                                <Link to={`/posts/${postItem.id}`}><button className="btn btn-primary"> Read More</button> </Link>
                            </div>
                        </div>
                    </div>
                )
            }

        </div>
    );
};

export default Posts;