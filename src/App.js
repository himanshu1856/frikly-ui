import Header from "./components/Header/Header"
import Product from "./components/Product/Product";
import SimilarProducts from "./components/SimilarProducts";
import RecentlyViewed from "./components/RecentlyViewed"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Header/>
      <Product/>
      <hr style={{margin:"70px"}}/>
      <SimilarProducts/>
      <RecentlyViewed/>
      <Footer/>
    </div>
  );
}

export default App;
