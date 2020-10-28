import { DisMisActions, actionIdentifier, JoinAction, SearchAction, RateAction, AddAction, SelectAction } from './actions'
import { DisMisState, User, Article, Rating } from './types';
import SampleData from './SampleData.json';

//Function that creates our sample data for the app from a Json file
function loadSampleData() {
    let array = []
    for (let article of SampleData.articles) {
        let rating = new Rating(article.rating.current, article.rating.readable, article.rating.objective, article.rating.cited, article.rating.numRatings)
        let newArticle = new Article(article.id, article.title, article.url, rating, article.keywords)
        array.push(newArticle);
    }
    const state: DisMisState = {
        idCounter: 10,
        currentArticle: array[0],
        articles: array,
        currentUser: null,
        searchedArticles: [],
        keywords: ""
    }
    return state;
}

// Initial state of the app:
const initialState: DisMisState = loadSampleData()

function disMisReducer(state: DisMisState | undefined, action: DisMisActions): DisMisState {
    if (state === undefined) {
        return initialState;
    }

    const nextId = state.idCounter + 1;


    // Interactions with the database happen here
    switch (action.type) {
        case actionIdentifier.Join: {
            let joinAction = action as JoinAction;
            let newState: DisMisState = { ...state };

            newState.currentUser = new User(nextId, joinAction.email, joinAction.password);
            newState.idCounter = nextId;

            return newState;
        }
        case actionIdentifier.Search: {

            // Parse keyword
            // Match keywords with query 
            // return articles that match the query 

            let searchAction = action as SearchAction;
            let query = searchAction.query.split(" ");

            // Searches the articles for the articles that match the keywords
            let results = filterArticles(query, state.articles)

            let newState: DisMisState = { ...state };

            // Set the keywords of the search to be stored in the keywords part of the state
            newState.keywords = searchAction.query;

            //Assigns the searched articles to the app state
            newState.searchedArticles = results;

            console.log("Search newState:")
            console.log(newState);

            return newState;
        }
        case actionIdentifier.Rate: {
            //TODO: Add a rating to an article and incorporate it into the database
            let rateAction = action as RateAction;
            let newState: DisMisState = { ...state };

            //Grabs the current article
            let ratedArticle = newState.currentArticle;

            ratedArticle.rating.addRating(rateAction.current, rateAction.readable, rateAction.objective, rateAction.cited)
            let newArticleArray = newState.articles.map( article => {
                return ((article.id === ratedArticle.id) ? ratedArticle : article )
            })

            newState.articles = newArticleArray;

            console.log("Rate NewState:")
            console.log(newState);

            return newState;
        }
        case actionIdentifier.Add: {
            //TODO: Add an article to the database along with a rating
        
            let addAction = action as AddAction;
            let newState: DisMisState = { ...state };

            // Create a new article object that has the first rating attached to it
            let newArticle = new Article(nextId,addAction.title, addAction.url, addAction.rating, addAction.keywords);
            
            // Add that new article to our "database"
            newState.articles.push(newArticle);

            //Set the new article to be the current article
            newState.currentArticle = newArticle;

            console.log("Add newState:")
            console.log(newState);
            
            return newState;
        }
        case actionIdentifier.Select: {
            let selectAction = action as SelectAction;
            let newState: DisMisState = { ...state };

            // Takes in the article clicked on from the article tile and sets it to be the current article 
            newState.currentArticle = selectAction.article;
            console.log("Select newState:")
            console.log(newState);

            return newState;
        }
        default:
            return state;
    }
}

export default disMisReducer;

// Functions used within the reducer

{/* 
    Filter function that searches for any article that matches any keyword. Currently lacks any complex keyword matching
*/}
function filterArticles(query: Array<string>, articles: Array<Article>) {
    let filtered: Article[] = []
    articles.map(article => {
        for (const keyword of article.keywords){
            for (const str of query){

                if ((keyword.toUpperCase() === str.toUpperCase()) && !filtered.includes(article)){
                    filtered.push(article)
                }
            }
        }
        return null;
    })
    return filtered;
}

