import "./App.css";
import Footer from "./Components/Footer";
import AddMovie from "./Components/Form";
import Header from "./Components/Header";

import Movie from "./Containers/Movies";

function App() {
  return (
    <div className="App bg-dark">
      <Header />
      <Movie />
      <AddMovie />
      <Footer />
    </div>
  );
}

export default App;
