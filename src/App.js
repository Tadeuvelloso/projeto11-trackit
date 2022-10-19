import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Cadastrar from "./components/Cadastro";
import GlobalStyle from "./components/Globalstyle" 
import Entrar from "./components/Login";

function App() {
  return (
    <BrowserRouter>
    <GlobalStyle/>
    <Routes>
      <Route path="/" element={<Entrar />}/>
      <Route path="/cadastro" element={<Cadastrar />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
