//import React from "react";
import React, { Component } from "react";

import "../../App.css";
import "./addarticlepage.css";
import "../RatingPage/RatingPage"
import { pages } from "../../App";
import * as Redux from "redux";
import { connect } from "react-redux";
import { actionIdentifier, createAddAction } from "../../redux/actions";

import logo from "../../assets/Dismis_app_icon.png";


//add onlinemeetingicon from fluent UI to add article box 

//need to display rating tsx 

//placeholder import logo from '../src/logo.jpeg';
interface AddArticlePageProps {
  //Contructor like for the page, these two methods are provided by the App for AddItemsPage to use
  changePage: (page: pages) => void;
 }

// interface AddProps {
//   //Contructor like for the page, these two methods are provided by the App for AddItemsPage to use
//   changePage: (page: pages) => void;
//   addArticles: (article: string) => void;
  
// }

// interface StateProps {
//   propFromReduxStore: string;
// }

// interface DispatchProps {
//   createAddAction: () => void;
// }

// class Add extends React.Component<AddProps, any> {
//   additem: string = "";
//   state = {
//     article: "",
//     keywords: "",
//     rating: 0,
//     error: null,
//   };
// //} //just commented this out

// render() {
//   return (
//     <form onSubmit = {this.handleSubmit}></form>
//   );
// }

// private handleSubmit= (event: React.FormEvent<HTMLFormElement>) => {
//   event.preventDefault
//   if (this.state.article == "") {
//     alert("ERROR: missing URL "); 
//     return; 
//   }
//   this.props.addArticles(this.state.article); 
//   this.props.changePage(pages.ListviewPage)
// }; 
// }

// function mapStateToProps(state: Object) {
//   return {

//   };
// }

// const mapDispatchToProps = (dispatch: Redux.Dispatch) => ({
//   addArticles: (article: string, rating: number) => dispatch(createAddAction(article, rating)),
// }); 

// let connectedComponent = connect(mapStateToProps, mapDispatchToProps)(Add); 

// export default connectedComponent; 


export default class AddArticlePage extends React.Component<
  AddArticlePageProps,
  any
> {
  render() {
    return (
      <div>
        <h1>Add an Article</h1>
        <div className="logo">
                    <img src={logo} ></img>
                    <h2></h2>
                    <h3>Dismiss Misinformation with More Information!</h3>
                    <h1></h1>
                </div>   
        <input name="text" type="text" placeholder="Enter URL" />
       < input name="text" type="text" placeholder="Enter Article Keywords(eg: Trump, COVID, etc.)" />
        {/* <button>Enter URL</button> */}
        <h1></h1>
        <button onClick={(e) => this.props.changePage(pages.HomePage)}>
          Submit Article
        </button>
        <button type= "submit">Enter Info</button>
        {/* keep type submit button for now then create the form and see if it works with redux to display in list view */}
        {/* <div className="boxed">No Articles found for [Keywords]</div> */}
      </div>
    );
  }
}
// import React from "react";
// import "./App.css";
// import "./components/AddArticlePage/addarticlepage.css";
// import "./components/RatingPage/RatingPage"
// import { pages } from "./App";


// //placeholder import logo from '../src/logo.jpeg';
// interface AddArticlePageProps {
//   //Contructor like for the page, these two methods are provided by the App for AddItemsPage to use
//   changePage: (page: pages) => void;
// }
// export default class AddArticlePage extends React.Component<
//   AddArticlePageProps,
//   any
// > {
//   render() {
//     return (
//       <div>
//         <h1>Add An Article</h1>
//         <input name="text" type="text" placeholder="Search" />
//         <button>Enter URL:</button>
//         <button onClick={(e) => this.props.changePage(pages.HomePage)}>
//           Submit Article
//         </button>
//         {/* <div className="boxed">No Articles found for [Keywords]</div> */}
//       </div>
//     );
//   }
// }