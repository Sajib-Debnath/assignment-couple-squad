import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';

const SingleUser = () => {

    const { id } = useParams()

    const { data: user = [], isLoading } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await fetch(`https://64cb8f7f700d50e3c7061cf4.mockapi.io/api/users/${id}`);
            const data = await res.json();
            return data;
        },
    });

    return (
        <div>

            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={user.avatar} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Shoes!</h2>
                    <p>{user.about}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

            <div className="card card-side bg-base-100 shadow-xl w-3/5 mx-auto">
                <figure>
                    <img src={user.avatar} alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{user.name}</h2>
                    <p>{user.email}</p>
                    <p> {user.about}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleUser;