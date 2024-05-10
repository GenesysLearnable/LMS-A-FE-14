import './App.css';
import SignUp from './AdminSignUp';
import Login from './Login';
import Welcome from './component/welcome';
import Header from './component/welcomeheader';

function App() {
  return (
    <div className="App">
  <SignUp />
<Login />
      <Header />
      <Welcome />
    </div>
  );
}

export default App;
