import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home/home";
import Module from "./page/Home/Module/module";
import Classroom from "./page/Home/Module/Classroom/classroom";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home/modules/:id" element={<Module/>}>
          <Route index element={<Classroom/>}/>
          <Route path="/home/modules/:id/:idAula" element={<Classroom/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
