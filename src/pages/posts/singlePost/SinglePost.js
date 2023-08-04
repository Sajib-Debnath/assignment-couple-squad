import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../../components/Loading';

const SinglePost = () => {

    const { id } = useParams()

    const { data: post = [], isLoading } = useQuery({
        queryKey: ['post'],
        queryFn: async () => {
            const res = await fetch(`https://64cb8f7f700d50e3c7061cf4.mockapi.io/api/posts/${id}`)
            const data = res.json()
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(post)

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={post.cover} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{post.title}</h1>
                    <p className="py-6">{post.description}</p>
                    {/* <p className="py-6"> Created Date : {post.createdAt}</p> */}
                </div>
            </div>
        </div>
    );
};

export default SinglePost;