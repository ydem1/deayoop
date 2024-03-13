import { createBrowserRouter } from 'react-router-dom'
import { App } from '../App.tsx';
import { Home } from '../pages/Home/Home.tsx';
import { User } from '../pages/User/User.tsx';
import { Other } from '../pages/User/components/Other/Other.tsx';
import { Profile } from '../pages/User/components/Profile/Profile.tsx';
import { ROUTES as path } from '../constants/routes.tsx';

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: path.home,
        element: <Home />
      },
      {
        path: path.user,
        element: <User />,
        children: [
          {
            path: path.userOrder,
            element: <Other />
          },
          {
            path: path.userFavourite,
            element: <Other />
          },
          {
            path: path.userHelp,
            element: <Other />
          },
          {
            path: path.userProfile,
            element: <Profile />
          }
        ]
      },
      {
        path: '*',
        element: <p>Not Found Page</p>
      }
    ]
  }
]);
