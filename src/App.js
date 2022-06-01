import Header from './components/header/header';
import Footer from './components/footer/footer';
import Categories from './components/storeFront/categories';
import Products from './components/storeFront/products';
import ActiveCategory from './components/ActiveCategory/ActiveCategory';
import Cart from './components/cart/cart';
function App() {
  return (
    <>
      <Header />
      <Cart/>
        <ActiveCategory/>
       <Categories />
  
      <Products /> 
      <Footer />
    </>
  );
}

export default App;