import Store from "../store/Store";
import { Provider } from "react-redux";
import AgregarCitas from "../components/AgregarCitas";
import ListarCitas from "../components/ListarCitas";
import "../styles/main.css";

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <div className="container text-center">
          <header>
            <h1>EPS Sura</h1>
          </header>
          <div className="row mt-3">
            <div className="col-md-6">
              <AgregarCitas />
            </div>
            <div className="col-md-6">
              <ListarCitas />
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
