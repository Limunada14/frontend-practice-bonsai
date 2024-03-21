import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';

// Pages
import Root from './Pages/Root';
import Home from './Pages/Main/Home';
import Pricing from './Pages/Main/Pricing';
import Product from './Pages/Main/Product';
import Reviews from './Pages/Main/Reviews';
import Templates from './Pages/Main/Templates';
import Authentication from './Pages/Main/Authentication';

import './App.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="product" element={<Product />} />
      <Route path="templates" element={<Templates />} />
      <Route path="pricings" element={<Pricing />} />
      <Route path="reviews" element={<Reviews />} />
      <Route path="auth" element={<Authentication />} />
      <Route path="/proposals" element={<div>/proposals</div>} />
      <Route path="/contracts" element={<div>/contracts</div>} />
      <Route path="/invoicing" element={<div>/invoicing</div>} />
      <Route path="/client-crm" element={<div>/client-crm</div>} />
      <Route path="/time-tracking" element={<div>/time-tracking</div>} />
      <Route path="/task-tracking" element={<div>/task-tracking</div>} />
      <Route path="/freelance-form" element={<div>/freelance-form</div>} />
      <Route path="/accounting" element={<div>/accounting</div>} />
      <Route path="bonsai-tax" element={<div>Tax</div>} />
      <Route path="bonsai-cash" element={<div>Cash</div>} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
