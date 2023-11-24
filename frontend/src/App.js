import Login from "./Login";
import Signup from "./Signup";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    // <div className="App">
    //  <Login/>
    // </div>

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
