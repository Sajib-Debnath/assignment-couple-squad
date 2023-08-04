import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';

const SingleUser = () => {

    const { id } = useParams()

    const { data: user = [] } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await fetch(`https://64cb8f7f700d50e3c7061cf4.mockapi.io/api/users/${id}`);
            const data = await res.json();
            return data;
        },
    });

    return (
        <div className='w-full'>

            <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                <figure className="px-10 pt-10">
                    <img src={user.avatar} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Shoes!</h2>
                    <p className='text-justify'>{user.about}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleUser;