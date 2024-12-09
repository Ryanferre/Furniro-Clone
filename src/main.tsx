
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import HomePage from './Home/Home.tsx'
import Login from './LoginPage/login.tsx'
import ShopItens from './pagesExternas/Shop/shop.tsx'
import PageCep from './pagesExternas/Cep/pageCep.tsx'
import ProductPage from './pagesExternas/productPage/product.tsx'
import { ClerkProvider } from '@clerk/clerk-react';
import ProtectedRoute from './ProtetedRoute.tsx'

const clerkFrontendApi = "https://enjoyed-husky-33.clerk.accounts.dev";
const publishableKey = "pk_test_ZW5qb3llZC1odXNreS0zMy5jbGVyay5hY2NvdW50cy5kZXYk"
const rounter= createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [{
      path: '/',
      element: <HomePage/>
    },
    {
      path: '/login',
      element: <Login/>
    },
    {
      path: '/shop',
      element: <ShopItens/>
    },
    {
      path: '/Adress',
      element: (
        <ProtectedRoute to="/login">
          <PageCep />
        </ProtectedRoute>
      )
    },
    {
      path: '/Productcart/:id',
      element: <ProductPage/>
    }]
  }
])
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <ClerkProvider frontendApi={clerkFrontendApi} publishableKey={publishableKey}>
      <RouterProvider router={rounter} />
    </ClerkProvider>
);
