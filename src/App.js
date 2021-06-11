import "./App.scss";
import Header from "./components/header";
import Features from "./components/features";
import Coffee from "./components/coffee";
import Combo from "./components/combo";
import Giftset from "./components/giftset";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Features />
      <Coffee />
      <Combo />
      <Giftset />
      <Footer />
    </div>
  );
}

export default App;
