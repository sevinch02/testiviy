
import './App.css';
import { Context } from './contex/Auth';
import { useContext } from 'react';
import Public from './Router/Public';
import Private from './Router/Private';



function App() {  
  const [token] = useContext(Context);

if (token){
return <Private />
}
return <Public/>;

}
export default App;
