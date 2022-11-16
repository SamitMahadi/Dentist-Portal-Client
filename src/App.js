import './App.css';
import {RouterProvider} from 'react-router-dom'
import router from './Routes/Routes/Routes';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div className='max-w-[1440px] mx-auto overflow-auto md:overflow-x-hidden lg:overflow-x-hidden'>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
