import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Pages/Footer/Footer";
import Header from "./Pages/Header/Header";
import Navbar from "./Pages/Navbar/Navbar";
import Review from "./Pages/Review.jsx/Review";
// import "./app.css";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <About />
      <Review />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
