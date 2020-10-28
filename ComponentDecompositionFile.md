# DisMis: Components' Decomposition

## Signin page - Rabeca 

### 3 Components:  

##### Logo along with text

##### Header 2

##### Form: Label for "Email:", textfield for email insertion; Label for "Password:", textfield was password insertion; button to Sign In
  
### Data Structure:  

  - On clicking "Sign in", a unique userID is generated based on the alias of the email and returned to the user as a prompt.

## Home page - Hiwot 

### 3 Components:  


##### Logo includes the logo of the app and the text 
##### Search bar
- Search button 
##### Add an article button that lead us to Add Article page 

### Data Structure: 

  - using React Search filter to find the keywords that are entered by the user 
  
## Add Article - Megha
*Information from this page will be imported as a data structure and sorted in the list view page  

### 2 Components: 


##### Form: Add an Article
- Submit article button navigates to home page
- Reusable
- Logo (Imported image) 
- Text entry:  URL, keywords 
- "Add an Article" heading


##### Rating 
- Embedded from rating screen 
- Reusable
- Ratings from this screen contribute to cumulative article rating 

### Data Structure
- Title: User entered Title of the Article 
- URL: The link to the article’s content passed from the user <String> 
- Rating: an object with the rating of the article’s different properties <Rating> 
- Keywords: a list of words that are related to the article List<string> 
- Date Added: The time the article was added to the database <Date>

## List view Page - Alex

### Layout:  
- Header containing search terms 
- List of articles organized by ranking
- Add Article button underneath the list of articles
### 1 Component:  

##### Article Tiles
- Take in an article object and renders the rating as a 5 star overall along with the title and URL
- When clicked, a new tab is opened abnd the rating view for that particular app is rendered. 

### Data Structure: 
- Article objecto to retireve articles and ratings from the database

## Rating page - Josh

### 2 Components:  

##### Header 
- Rating (title) 
- Question (subheading) 
  
##### Table of 5 Rating options 
- Titles of categories 
- Interactive Star Buttons 
- Submit Rating Button 
 
### Data Structure 
- Takes the new rating for an article and averages it.
- Sends the average to the database

