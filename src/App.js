//import logo from './logo.svg';
import "./App.css";
import Card from "./Component/Card";
import Feature from "./Component/Feature";
import Nav from "./Component/Nav";
import Transporting from "./Component/Transporting";
import MeetExpert from "./Component/MeetExpert";
import WhyChoose from "./Component/WhyChoose";
import MessageUs from "./Component/MessageUs";

function App() {
  return (
    <div>
      <Nav />
      <Feature />
      <Transporting />
      <Card />
      <WhyChoose />
      <MeetExpert />
      <MessageUs />
      <div>hahaha</div>
    </div>
  );
}

export default App;
