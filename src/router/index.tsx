import { App } from 'App.tsx';
import { ROUTES as path } from 'constants/routes.tsx';
import { Home } from 'pages/Home';
import { User } from 'pages/User';
import { Other } from 'pages/User/components/Other';
import { Profile } from 'pages/User/components/Profile';
import { createBrowserRouter } from 'react-router-dom'

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
