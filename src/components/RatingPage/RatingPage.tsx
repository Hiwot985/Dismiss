import React from "react";
import "../../App.css";
import { pages } from "../../App";
import './RatingPage.css'
import StarRating from './StarRating';


//placeholder import logo from '../src/logo.jpeg';
interface RatingPageProps {//Contructor like for the page, these two methods are provided by the App for AddItemsPage to use
    changePage: (page: pages) => void;
  }

export default class RatingPage extends React.Component<RatingPageProps, any> {
    render() {
         return(
          <form className = "form">
            <div className= "card">
              <div className = "text">
                <h2>Current</h2>
                <p> How up to date is the article? </p>
            </div>
            <div className = "rating">
            <StarRating></StarRating>
              </div>
            </div>

            <div className= "card">
              <div className = "text">
                <h2>Readable</h2>
                <p> How easy is it to read this article? </p>
            </div>
            <div className = "rating">
            <StarRating></StarRating>
              </div> 
            </div>

            <div className= "card">
              <div className = "text">
                <h2>Cited</h2>
                <p> How well are other sources referenced? </p>
            </div>
            <div className = "rating">
            <StarRating></StarRating>
              </div>
            </div>

            <div className= "card">
              <div className = "text">
                <h2>Objective</h2>
                <p> How unbiased is this article? </p>
            </div>
            <div className = "rating">
            <StarRating></StarRating>
              </div>
            </div>
             
            <div className = "button">
            <button onClick={e => this.props.changePage(pages.ListviewPage)}> Submit Rating </button>
            </div>
      

          </form>

            
            ) 
        };

}