import React from "react";
import "./App.css";
import AddArticlePage from "./components/AddArticlePage/addarticlepage";
import HomePage from "./HomePage";
import ListviewPage from "./ListviewPage";
import RatingPage from "./components/RatingPage/RatingPage";
import SigninPage from "./components/SigninPage/SigninPage";

export enum pages {
  SigninPage,
  HomePage,
  ListviewPage,
  RatingPage,
  AddArticlePage,
}

interface AppState {
  currentPage: pages;
}

//The state is defined by AppState
export class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      currentPage: pages.SigninPage,
    };
  }

  render() {
    return <div className="App">{this.getCurrentScreen()}</div>;
  }

  private getCurrentScreen = (): JSX.Element => {
    switch (this.state.currentPage) {
      case pages.SigninPage:
        return <SigninPage changePage={this.changeScreen} />;
      case pages.HomePage:
        return <HomePage changePage={this.changeScreen} />;
      case pages.RatingPage:
        return <RatingPage changePage={this.changeScreen} />;
      case pages.AddArticlePage:
        return <AddArticlePage changePage={this.changeScreen} />;
      case pages.ListviewPage:
        return <ListviewPage changePage={this.changeScreen} />;
      default:
        return <div>ERROR</div>;
    }
  };

  private changeScreen = (nextPage: pages) => {
    this.setState((state, props) => ({
      currentPage: nextPage,
    }));
  };
}

export default App;
