import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";

import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Presentation from "./pages/Presentation/Presentation";
import Private from "./pages/Private";
import AuthProvider from "./lib/AuthProvider";
import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";
import CreateTrip from "./pages/CreateTrip/CreateTrip";
import TripDetail from "./pages/TripDetails/TripDetail";
import Profile from "./pages/Profile/Profile";
import EditProfile from "./pages/EditProfile/EditProfile";
import EditTrip from "./pages/EditTrip/EditTrip";
import AddActivity from "./pages/AddActivities/AddActivities";

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
              {/* <Redirect from="/" to="/login" /> */}
              <Switch>
                <AnonRoute exact path="/signup" component={Signup} />
                <AnonRoute exact path="/login" component={Login} />
                <PrivateRoute exact path="/home" component={Private} />
                <PrivateRoute
                  exact
                  path="/trips/create"
                  component={CreateTrip}
                />
                <PrivateRoute exact path="/trips/detail/:travelCity/:id/addActivity" component={AddActivity} />
                <PrivateRoute
                  exact
                  path="/trips/detail/:id"
                  component={TripDetail}
                />
                <PrivateRoute exact path="/profile" component={Profile} />
                <PrivateRoute
                  exact
                  path="/profile/edit"
                  component={EditProfile}
                />

                <PrivateRoute
                  exact
                  path="/trips/detail/edit/:travelCity/:id"
                  component={EditTrip}
                />
              </Switch>
            </div>
          </AuthProvider>
        )}
      </div>
    );
  }
}

export default App;
