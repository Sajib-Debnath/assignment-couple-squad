import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading';


const Users = () => {

    //fetch 
    const { data: users = [], isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://64cb8f7f700d50e3c7061cf4.mockapi.io/api/users');
            const data = await res.json();
            return data;
        },
    });


    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Account Creation Time</th>
                            <th></th>
                        </tr>
                    </thead>


                    {
                        users.map((user) =>
                            <tbody key={user.id}>
                                <tr>

                                    <td>
                                        <Link to={`/users/${user.id}`}>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={user.avatar} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="font-bold">{user.name}</div>
                                                    <div className="text-sm opacity-50">United States</div>
                                                </div>
                                            </div>
                                        </Link>
                                    </td>

                                    <td>
                                        {user.email}
                                        <br />
                                        <span className="badge badge-ghost badge-sm">{user.about.slice(0, 30) + ' ...'}</span>
                                    </td>
                                    <td>
                                        {user.createdAt}
                                    </td>
                                    <th>
                                        <Link to={`/users/${user.id}`}>
                                            <button className="btn btn-ghost btn-xs">More Details</button>
                                        </Link>
                                    </th>
                                </tr>
                            </tbody >
                        )
                    }
                </table>
            </div>
        </div >
    );
};

export default Users;

