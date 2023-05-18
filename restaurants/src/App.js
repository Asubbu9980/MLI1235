import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './component/Layout'
import Home from './component/Home'
import AddRestaurants from './component/AddRestaurants'
import DetailsPage from './component/Details'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path='addRestaurants' element={<AddRestaurants />} />
            <Route path='detailsPage/:id' element={<DetailsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
