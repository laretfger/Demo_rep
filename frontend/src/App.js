import './App.css';
import Header from './component/header/header.js';
import OrderPage from './component/orderPage/orderPage.js';
import CreatePage from './component/createPage/createPage.js';
import UpdateOrder from './component/updateOrder/updateOrder.js';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<OrderPage />} />
        <Route path="/CreatePage" element={<CreatePage />} />
        <Route path="/UpdateOrder" element={<UpdateOrder />} />
      </Routes>
    </>
  );
}

export default App;
