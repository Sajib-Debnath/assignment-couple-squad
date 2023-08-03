import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home';
import Main from '../layout/Main';
import Users from '../pages/users/Users';
import Posts from '../pages/posts/Posts';
import SingleUser from '../pages/users/singleUser.js/SingleUser';
import SinglePost from '../pages/posts/singlePost/SinglePost';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'users',
                element: <Users />
            },
            {
                path: 'users/:id',
                element: <SingleUser />
            },
            {
                path: '/posts',
                element: <Posts />
            },
            {
                path: 'posts/:id',
                element: <SinglePost />
            }
        ]
    }
])