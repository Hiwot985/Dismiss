// Interface for the enitre AppState
export interface DisMisState {
    idCounter: number,
    currentArticle: Article,
    currentUser: User | null,
    articles: Array<Article>
    keywords: string;
    searchedArticles: Array<Article>;
}

// User class that contains an email and a user id
export class User {
    email: string;
    id: number;
    password: string;

    constructor(_id: number, _email: string, _password: string) {
        this.email = _email;
        this.password = _password;
        this.id = _id;
    }
}

// Article class that contains essential article information as well as the ratings for that Article
export class Article {
    id: number;
    title: string;
    url: string;
    rating: Rating;
    keywords: string[];

    constructor(_id: number, _title: string, _url: string, _rating: Rating, _keywords: string[]) {
        this.id = _id;
        this.title = _title;
        this.url = _url;
        this.rating = _rating;
        this.keywords = _keywords;

    }

}

//Rating object that contains the rating values for a specific article 
export class Rating {
    current: number;
    readable: number;
    objective: number;
    cited: number;
    numRatings: number;

    constructor(_current: number, _readable: number, _objective: number, _cited: number, _numRatings: number = 1) {
        this.current = _current
        this.readable = _readable
        this.objective = _objective
        this.cited = _cited
        this.numRatings = _numRatings;
    }

    addRating(_current: number, _readable: number, _objective: number, _cited: number) {
        this.current += _current;
        this.readable += _readable;
        this.objective += _objective;
        this.cited += _cited;
        this.numRatings++;
    }

    getOverallRating() {
        return (this.current + this.cited + this.readable + this.objective) / (4 * this.numRatings);
    }

    getCurrentRating() {
        return (this.current) / (this.numRatings);
    }

    getCitedRating() {
        return (this.cited) / (this.numRatings);
    }

    getReadableRating(){
        return (this.readable) / (this.numRatings);
    }

    getObjectiveRating(){
        return (this.readable) / (this.numRatings);
    }


}