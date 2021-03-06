import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { render } from "react-dom";
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from "./pages/About";
import UnderConstruction from './pages/UnderConstruction';
import TOS from './pages/tos'
import Commission from "./pages/commissions";

import './Style.css';

const rootElement = document.getElementById("root");
render(
  <HashRouter>
     <Routes>
      <Route path="/" element={<About />} />
      <Route path="/TOS" element={<TOS />} />
      <Route path="/Commissions" element={<Commission />} />
      <Route path="/Customs" element={<UnderConstruction />} />
      <Route path="/Adoptables" element={<UnderConstruction />} />
      <Route path="/Lopilu" element={<UnderConstruction />} />
      <Route path="/Gleamstic" element={<UnderConstruction />} />
      <Route path="/Arma%20Caeli" element={<UnderConstruction />} />
      <Route path="/Lovabuns" element={<UnderConstruction />} />
    </Routes>
  </HashRouter>,
  rootElement
);