import { createBrowserRouter } from 'react-router-dom';
import {Login} from "../pages/index"
import {Register} from "../pages/index"
import Settings from "../pages/settings/index"

const router= createBrowserRouter([
    {
        path: '/',
        element: <Register />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/settings',
        element: <Settings />,
      },
])

export default router