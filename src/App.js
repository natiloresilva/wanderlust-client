import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";

import Navbar from "./components/Navbar";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Presentation from "./pages/Presentation/Presentation";
import Private from "./pages/Private";
import AuthProvider from "./lib/AuthProvider";
import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";
import CreateTrip from "./pages/CreateTrip/CreateTrip";
import TripDetail from "./pages/TripDetails/TripDetail";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClickPresentation = this.handleClickPresentation.bind(this);
    this.state = { presentation: true };
  }
  handleClickPresentation() {
    this.setState({ presentation: false });
  }

  render() {
    return (
      <div>
        {this.state.presentation ? (
          <Presentation
            handleClickPresentation={this.handleClickPresentation}
          />
        ) : (
          <AuthProvider>
            {" "}
            {/*       <---  Envolvemos los componentes con AuthProvider       */}
            <div>
              <Redirect from="/" to="/login" />
              <Switch>
                <AnonRoute exact path="/signup" component={Signup} />
                <AnonRoute exact path="/login" component={Login} />
                <PrivateRoute exact path="/private" component={Private} />
                <PrivateRoute
                  exact
                  path="/travel/trips"
                  component={CreateTrip}
                />
                <PrivateRoute exact path="/tripDetail" component={TripDetail} />
              </Switch>
            </div>
          </AuthProvider>
        )}
      </div>
    );
  }
}

export default App;
