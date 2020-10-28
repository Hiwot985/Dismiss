import React from "react";
import ArticleTile from "./components/ListviewPage/ArticleTile";
import "./App.css";
import { pages } from './App';
import './components/ListviewPage/ListviewPage.css'

// Redux Imports
import { Article, DisMisState } from './redux/types';
import { connect } from 'react-redux'
interface ListviewPageProps {//Contructor like for the page, these two methods are provided by the App for AddItemsPage to use
  changePage: (page: pages) => void;
  articles: Array<Article>;
  keywords: string;
}

class ListviewPage extends React.Component<ListviewPageProps, any> {
  render() {
    if (this.props.articles.length === 0) {
      return (
        <div className="listview">
          <h1>No results  for {this.props.keywords}</h1>
          <button onClick={e => this.props.changePage(pages.HomePage)}> Back </button>
          <div id="listview-article-container">
            <div className="listview-article-tile">
              <h3>No Articles Found</h3>
            </div>
          </div>
        </div>
      )
    }
    else {
      return (

        <div className="listview">
          <h1>Search results for {this.props.keywords}</h1>
          <button onClick={e => this.props.changePage(pages.HomePage)}> Back </button>
          <div id="listview-article-container">
            {
              this.props.articles.map(article => {
                return <ArticleTile key={article.id} article={article} changePage={this.props.changePage} />
              })
            }
          </div>
        </div>
      )
    }
  };


}

// Map redux state to component state
// This function subscribes to all store updates and gets called when
// anything in the store changes. 
// It return an object containing the store data you
// want to transmit as props to a component
function mapStateToProps(state: DisMisState) {
  return {
    articles: state.searchedArticles,
    keywords: state.keywords
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    // Because this component doesn't change the state of the app at all
    // we're going to leave this empty
  }
}


let connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListviewPage);


export default connectedComponent;