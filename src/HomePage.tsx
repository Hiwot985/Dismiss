import React from "react";
import "./App.css";
import DismissLogo from "./components/HomePage/DismissLogo";
import SearchBar from "./components/HomePage/SearchBar";
import { pages } from "./App";

//placeholder import logo from '../src/logo.jpeg';
interface HomePageProps {
  //Contructor like for the page, these two methods are provided by the App for AddItemsPage to use
  changePage: (page: pages) => void;
}
export default class HomePage extends React.Component<HomePageProps, any> {
  render() {
    return (
      <div>
        <DismissLogo />
        <SearchBar changePage={this.props.changePage} />

        <button onClick={(e) => this.props.changePage(pages.AddArticlePage)}>
          Add An Article
        </button>
        <button onClick={(e) => this.props.changePage(pages.SigninPage)}>
          {" "}
          Sign Out{" "}
        </button>
      </div>
    );
  }
}
