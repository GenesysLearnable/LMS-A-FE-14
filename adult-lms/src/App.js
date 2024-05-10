import './App.css';
import Login from './Components/AdminLogin';

import SignUp from './AdminSignUp';

import Welcome from './component/welcome';
import Header from './component/welcomeheader';

export default function GoLearn() {
  return (
    <div className="App">
  <SignUp />
<Login />
      <Header />
      <Welcome />
    </div>
  )
}
