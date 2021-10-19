import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import AboutUs from './Components/AboutUs/AboutUs';
import AuthProvider from './Context/AuthProvider';
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import MemberShip from './Components/Membership/MemberShip';
import NotFound from './Components/NotFound/NotFound';
import Register from './Components/Register/Register'
import SeeMore from './Components/SeeMore/SeeMore';
import Services from './Components/Services/Services';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/service">
              <Services></Services>
            </Route>

            <PrivateRoute path="/seemore/:serviceId">
              <SeeMore></SeeMore>
            </PrivateRoute>

            <Route path="/membership">
              <MemberShip></MemberShip>
            </Route>

            <Route path="/aboutus">
              <AboutUs></AboutUs>
            </Route>

            <Route path="/contactus">
              <Contact></Contact>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/register">
              <Register></Register>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
