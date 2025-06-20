import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import HomePage from './Home/Home.tsx'
import Login from './pages/Login/Login.tsx'
import ShopItens from './pages/Shop/shop.tsx'
import ProductPage from './pages/productPage/product.tsx'
import ProtectedRoute from './ProtetedRoute.tsx'
import PageCep from './pages/Cep/pageCep.tsx'
import ChoiceItens from './pages/ChoiceItens/Choiceitens.tsx'
import { ClerkProvider } from '@clerk/clerk-react';


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
      path: '/Adress',
      element: (
        <ProtectedRoute redirectTo="/login">
          <PageCep />
        </ProtectedRoute>
      )
    },
    {
      path: '/shop',
      element: <ShopItens/>
    },
  {
      path: '/Productcart/:id',
      element: <ProductPage/>
    },
  {
      path: '/ChoiceItens',
      element: <ChoiceItens/>
    }]
  }
])
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <ClerkProvider publishableKey={publishableKey}>
      <RouterProvider router={rounter} />
    </ClerkProvider>
);
