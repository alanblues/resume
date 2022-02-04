// import { BrowserRouter, Switch, Route } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/**
 * En la version 6 de React Router Dom
 * se sustituye Switch por Routes
 * y al dar de alta la ruta es de la siguiente manera;
 * YA NO ES: componente={ComponentName}
 * AHORA: element={ <ComponentName />}
 * vease: https://www.youtube.com/watch?v=zEQiNFAwDGo
 */

/** Components */
import Home from "./pages/Home/Home";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/history" element={<History />} />
        <Route exact path="*" element={<Notfound />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;