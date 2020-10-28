import React from "react";
import "../../App.css";
import { pages } from "../../App";
import RatingTile from "./RatingTile";

// Redux Imports
import { createSelectAction } from '../../redux/actions';
import { Article, DisMisState } from '../../redux/types';
import { connect } from 'react-redux'

//placeholder import logo from '../src/logo.jpeg';
interface ArticleTileProps {
  changePage: (page: pages) => void;
  article: Article;
  selectAction: (article: Article) => void;
}

export class ArticleTile extends React.Component<
  ArticleTileProps,
  any
  > {
  render() {
    return (
      <div className="listview-article-tile">
        <h4>
          <a
            href={this.props.article.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => this.handleClick(e)}
          >
            {this.props.article.title}
          </a>
        </h4>
        <small className="listview-keyword-container">
          <p>keywords: </p>
          {this.props.article.keywords.map(
            (keyword, index) => {
              return <p key={index}>{keyword}</p>;
            }
          )}
        </small>
        <RatingTile rating={this.props.article.rating} />
      </div>
    );
  }

  handleClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    this.props.selectAction(this.props.article)
    this.props.changePage(pages.RatingPage)

  }

}

function mapStateToProps(state: DisMisState) {
  return {
    //
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    selectAction: (article: Article) => dispatch(createSelectAction(article))
  }
}


let connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleTile);


export default connectedComponent;
