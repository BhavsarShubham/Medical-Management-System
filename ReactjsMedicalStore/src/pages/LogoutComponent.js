import React from "react";
import { Redirect } from "react-router-dom";
import AuthHandler from "../utils/AuthHandler";
import {usericon} from '../bg.jpg'

class LogoutComponent extends React.Component {
  render() {
    AuthHandler.logoutUser();
    return <Redirect to="/" />;
  }
}

export default LogoutComponent;
