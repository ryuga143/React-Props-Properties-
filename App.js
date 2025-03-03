
import './App.css';
import FirstComp from './FirstComp';
import SecondComp from './SecondComp';
import ThirdComp from './ThirdComp';
import FourthComp from './FourthComp';



function App() {
  return (
    <div className="App">
      <FirstComp  name='surya'/> //name is a prop and it's value is 'surya' (check the FirstComp)//
      <SecondComp headerdown= 'Bring back first'/> //headerdown is a prop and it's value is 'Bring back first' (check the SecondComp)
      <ThirdComp name='kumar'/> // name is a prop and it's value is 'kumar' (check the ThirdComp)
      <FourthComp name='siva'/> // name is a prop and it's value is 'siva' (check the FourthComp)
    </div>
  );
}

export default App;


