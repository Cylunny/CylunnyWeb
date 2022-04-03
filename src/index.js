import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { render } from "react-dom";
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from "./pages/About";
import Lopilu from "./pages/Lopilu";
import UnderConstruction from './pages/UnderConstruction';
import TOS from './pages/tos'

const rootElement = document.getElementById("root");
render(
  <HashRouter>
     <Routes>
      <Route path="/" element={<About />} />
      <Route path="/TOS" element={<TOS />} />
      <Route path="/Commissions" element={<UnderConstruction />} />
      <Route path="/Customs" element={<UnderConstruction />} />
      <Route path="/Lopilu" element={<UnderConstruction />} />
      <Route path="/Gleamstic" element={<UnderConstruction />} />
      <Route path="/Arma%20Caeli" element={<UnderConstruction />} />
      <Route path="/Lovabuns" element={<UnderConstruction />} />
    </Routes>
  </HashRouter>,
  rootElement
);