# Technical infos of the app

This info will become handy for you when you will have to talk about your app and present it to other. It is also important to know all the tools, apis etc that you used.

Remove all the uncessary text from this document

## Target
Large screen 

## Tools

List any tool you used in your project. Mention what you used it for (spec, coding, testing etc...). You will need to update when you go more deeply into coding.
Max time to allocate to this task: 15 minutes

* Documentation - Word, PowerPoint, Miro etc. 
  * Spec - Word
  * Navigation - Proto.io sketch 
  
* UI/UX design - Proto.io, Figma  

* Datastructures - Arrays, strings, number, aggregating values for rating parameters, 

* Coding

  * Visual Studio Code 
  * React, TypeScript, Redux etc. 
  * FluentUI, React Springs, Bootstrap, Lottie
  * GitHub for pull requests, review, and version control
  * Databases - Firebase
  
* Testing - Jest 

* Project Management - Git, GitHub

  * Kanban board for tracking progress 
  * Issues to see feedback 
  * Editing cards based on feedback 
  * Protocol to review changes before merging to minimize compile errors 
  * Modifying/suggesting modifications for code 
  
* Communication - Microsoft Teams, Outlook Email

## APIs
* Firebase API
* Diffbot Article API 

## Data
* Diffbot Article API extracts article data upon URL insertion (title, headline, author, date, content in HTML form, token, etc.) to JSON file. 
* JSON file produced by Diffbot Article API is called to display article information in the list view within the database. 
* React star ratings.js package is used to generate numeric values based on the user rating the article on a 5 star scale for each criteria. 
* Values will be called from package to aggregate an average cumulative rating per article that will be displayed in the list view. 
* Saving article details from Diffbot and values from ratings.js within the database via Firebase 

