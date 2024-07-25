import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./components/scss/style.scss";

function App() {
  return (
    <>
      <div className="bg-cover bg-content">
        <Header />
        <Body />
        <Footer />
      </div>
    </>
  );
}

export default App;
