import { Route, Routes } from "react-router-dom";
import Details from "./pages/Details";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
<h1>React Apollo Graphql</h1>
<Routes>
  <Route path='/' element={<Home />}/>
  <Route path='/:id' element={<Details />}/>
</Routes>
    </div>
  );
}

export default App;
