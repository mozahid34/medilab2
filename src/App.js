import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router';
import './App.css';
import router from './Routes/Routes/Routes';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <Toaster 
      position="top-right"
      reverseOrder={false}/>
      
    </div>
  );
}

export default App;
