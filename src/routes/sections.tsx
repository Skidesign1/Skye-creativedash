import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

import { varAlpha } from 'src/theme/styles';
// import PrivateRoute from './components/PrivateRoute';
import { DashboardLayout } from 'src/layouts/dashboard';
import { AuthLayout } from 'src/layouts/auth';



// ----------------------------------------------------------------------
export const SignInPage = lazy(() => import('src/pages/sign-in'));
export const HomePage = lazy(() => import('src/pages/home'));
 export const BlogPage = lazy(() => import('src/pages/blog'));
  export const UserPage = lazy(() => import('src/pages/user'));
export const ProductsPage = lazy(() => import('src/pages/products'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));


// ----------------------------------------------------------------------

const renderFallback = (
  <Box display="flex" alignItems="center" justifyContent="center" flex="1 1 auto">
    <LinearProgress
      sx={{
        width: 1,
        maxWidth: 320,
        bgcolor: (theme) => varAlpha(theme.vars.palette.text.primaryChannel, 0.16),
        [`& .${linearProgressClasses.bar}`]: { bgcolor: 'text.primary' },
      }}
    />
  </Box>
);

export function Router() {
  return useRoutes([
    {
      path: '/',
      element: <SignInPage/>
    },
   
    {
    path:'/dashboard',
      element: (
        <DashboardLayout>
           <Outlet/>  
          </DashboardLayout>
      ),
      children: [
        {
          index: true,
           element: <Navigate to="/dashboard/home" replace />
           },
        { 
          path: 'home',
           element:<HomePage />
           },
       // { path: 'user', element: <UserPage /> },
         { 
          path: 'products', 
          element: <ProductsPage />
         },
      // { path: 'blog', element: <BlogPage /> },
      ],
    },

   // {
    //  path:'404',
    //  element: <Page404 />
   // },
   
    {
     path: '*',
     element: <Navigate to="/dashboard/products" replace />,
    },
  ]);
}
