import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./public/Globalstyle";
import SignUp from "./page/signUp";
import Login from "./page/login";
import Header from "./page/header";
import Main from "./page/main";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/header" element={<Header />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
