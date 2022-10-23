import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Cadastrar from "./components/Cadastro";
import GlobalStyle from "./components/Globalstyle" 
import Entrar from "./components/Login";
import Habitos from "./components/Habitospage";
import Hoje from "./components/Hojepage";
import Historico from "./components/HistoricoPage";
import { CustomerProvider } from "./contexts/customer";

function App() {

  return (
    <BrowserRouter>
      <GlobalStyle/>
      <CustomerProvider>
        <Routes>
          <Route path="/" element={ <Entrar/> }/>
          <Route path="/cadastro" element={ <Cadastrar/> } />
          <Route path="/habitos" element={ <Habitos/> } />
          <Route path="/hoje" element={ <Hoje/> } />
          <Route path="/historico" element={ <Historico/> }/>
        </Routes>
      </CustomerProvider>
    </BrowserRouter>
  );
}

export default App;
