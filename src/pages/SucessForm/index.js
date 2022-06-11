import { useParams, useHistory } from "react-router-dom";
import "./styles.css";

function SucessForm() {
  const params = useParams();
  const history = useHistory();

  return (
    <div className="sucessForm">
      <h1>Seja bem-vindo, {params.name}</h1>
      <button onClick={() => history.push("/")}>Voltar</button>
    </div>
  );
}

export default SucessForm;
