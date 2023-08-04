import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routes/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='lg:mx-24'>
      <RouterProvider router={router}>
      </RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
