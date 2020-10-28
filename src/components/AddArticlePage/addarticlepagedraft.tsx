import React from "react";
import "../../App.css";
import "./components/AddArticlePage/addarticlepage.css";
import "../RatingPage/RatingPage"
import { pages } from "../../App";
import logo from "../../assets/Logo.png"

//add onlinemeetingicon from fluent UI to add article box 

//need to display rating tsx 

//placeholder import logo from '../src/logo.jpeg';
interface AddArticlePageProps {
  //Contructor like for the page, these two methods are provided by the App for AddItemsPage to use
  changePage: (page: pages) => void;
}
export default class AddArticlePage extends React.Component<
  AddArticlePageProps,
  any
> {
  render() {
    return (
      <div>
        <h1>Add an Article</h1>
        <div className="logo">
                    <img src={logo} alt="Logo shows up"></img>
                    <h3>Dismiss Misinformation with More Information!</h3>
                </div>
        <input name="text" type="text" placeholder="Enter URL" />
       < input name="text" type="text" placeholder="Keywords" />
        <button>Enter URL</button>
        <button onClick={(e) => this.props.changePage(pages.HomePage)}>
          Submit Article
        </button>
        {/* <div className="boxed">No Articles found for [Keywords]</div> */}
      </div>
    );
  }
}