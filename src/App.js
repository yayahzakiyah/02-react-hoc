import logo from './logo.svg';
import './App.css';
import HelloComponent from './component/HelloComponent';
import withSearch from './shared/WithSearch';
import ProductList from './features/product/ProductList';
import data from './product.json'

function App() {
  const ProductListWithSearch = withSearch(ProductList, data)
  return (
    <>
      <ProductListWithSearch/>
    </>
  );
}

export default App;
