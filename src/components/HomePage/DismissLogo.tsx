import React, { Component } from "react";
import "./Homepage.css";
import logo from "../../assets/Dismis_app_icon.png";
import Lottie from "react-lottie";
import animationData from "../../lotties/hi.json";
class Logo extends Component {
  defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  render() {
    return (
      <div className="logo-main">
        <Lottie options={this.defaultOptions} height={300} width={300} />
        {/* <img src={logo} /> */}
      </div>
    );
  }
}

export default Logo;
