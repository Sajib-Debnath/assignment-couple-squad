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
                <figure className="px-10 pt-10 ">
                    <img src={user.avatar} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body   mb-5">
                    <h2 className="card-title mb-5">
                        {user.name}
                    </h2>
                    <p className='text-justify mb-5'> <b>About : </b>{user.about}</p>
                    <p className='text-left'> Email: <strong>{user.email}</strong> </p>
                </div>

            </div>
        </div>
    );
};

export default SingleUser;