import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading';


const Users = () => {


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
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>


                    {
                        users.map((user) =>
                            <tbody key={user.id}>
                                <tr>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={user.avatar} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <Link to={`/users/${user.id}`}>
                                                <div>
                                                    <div className="font-bold">{user.name}</div>
                                                    <div className="text-sm opacity-50">United States</div>
                                                </div>
                                            </Link>
                                        </div>
                                    </td>
                                    <td>
                                        Zemlak Daniel and Leannon
                                        <br />
                                        <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                    </td>
                                    <td>Purple</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">details</button>
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

