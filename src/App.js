import { useParams } from "react-router-dom";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import "./App.css";
import FormPage from "./pages/FormPage";
import SucessForm from "./pages/SucessForm";

function App() {
  const params = useParams();

  console.log(params);
  return (
    <div className="App">
      <Switch>

        <Route exact path="/">
          <FormPage />
        </Route>

        <Route exact path="/sucess-form/:name">
          <SucessForm />
        </Route>
        
      </Switch>
    </div>
  );
}

export default App;
