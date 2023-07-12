import router from './router/BrowserRouter';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/> 
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default App;
