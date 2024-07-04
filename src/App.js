import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Footer from "./component/Footer"
import Alert from "./component/Alert";
import FirstSec from "./component/FirstSec"
import SecondSec from "./component/SecondSec";
import ThirdSec from "./component/ThirdSec";
import FourthSec from "./component/FourthSec";
import FifthSec from "./component/FifthSec"
import SixthSec from "./component/SixthSec";

import  "./commonResource/css/bootstrap.css"
import "./commonResource/css/styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Alert />
      <FirstSec />
      <SecondSec />
      <ThirdSec />
      <FourthSec />
      <FifthSec />
      <SixthSec />
      <Footer />
    </div>
  );
}

export default App;
