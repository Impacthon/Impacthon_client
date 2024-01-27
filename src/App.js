import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyles from "./public/Globalstyle";

import Signin from "./page/Signin";
import Signup from "./page/Signup";
import SelectPosition from "./page/survey/SelectPositon";
import Privacyadmin from "./page/survey/PrivacyGuide";
import PrivacyTraveler from "./page/survey/PrivacyTraveler";
import ProfileDataGuid from "./page/survey/ProfileDataGuid";
import ProfileDataTraveler from "./page/survey/ProfileDataTraveler";
import Point from "./page/point";
import Header from "./page/header/index";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      {/* <Point/> */}
      <Router>
        <Routes>
          <Route path="/login" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/selectPosition" element={<SelectPosition />} />
          <Route path="/Privacyadmin" element={<Privacyadmin />} />
          <Route path="/PrivacyTraveler" element={<PrivacyTraveler />} />
          <Route path="/ProfileDataGuid" element={<ProfileDataGuid />} />
          <Route path="/" element={<Header />} />
          <Route
            path="/ProfileDataTraveler"
            element={<ProfileDataTraveler />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
