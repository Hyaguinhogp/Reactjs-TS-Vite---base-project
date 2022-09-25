import './App.css';
import { Global } from './styles/global';
import { Toaster } from "react-hot-toast";
import Routes from './routes';

function App() {
  return (
    <>
      <Global />
      <Routes />
      <Toaster />
    </>
  )
}

export default App
