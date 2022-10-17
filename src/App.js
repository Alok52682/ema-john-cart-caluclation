import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Main from './Layouts/Main';
import Order from './components/Orders/Order';
import Inventory from './components/Inventory/Inventory';
import Shop from './components/Shop/Shop';
import About from './components/About/About';
import { ProductsAndCartLoader } from './Loaders/ProductsAndCartLoader';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: ProductsAndCartLoader,
          element: <Shop></Shop>
        },
        {
          path: '/shop',
          loader: ProductsAndCartLoader,
          element: <Shop></Shop>
        },
        {
          path: '/orders',
          loader: ProductsAndCartLoader,
          element: <Order></Order>
        },
        {
          path: '/inventory',
          element: <Inventory></Inventory>
        },
        {
          path: '/about',
          element: <About></About>
        }
      ]
    },
  ])
  return (
    <div>
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
