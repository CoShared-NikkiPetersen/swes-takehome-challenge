# coshared-np

CoShared is an app for property and business managers alike. An admin can utilize CoShared to see what vacancies are in 
a particular building, get information about a particular company (like how many employees they have), and even add or 
delete a company from the directory. 

## Tech stack

For this project, I used Vue.js for the front end and accessed the database directly with API calls. 
The database is served from Firebase (using a NoSQL data model in Firestore), so there is no need for a back end. The 
linter runs on save, so you don't have to worry about it.

## Quirks

Although I was able to complete most of the specs for this project, there are some small bugs. These are tasks I will complete 
when I have some spare time. 
 * When adding an employee, the UI should refresh
 * When deleting an employee, the UI should refresh
 * Calculating total rent for a building proved shockingly difficult. I think it's a Vue thing, so I'll dive into learning 
why I couldn't update that value.
 * I made some decisions about where in the UI some functionality would live, which may or may not be how it was intended 
by those who wrote the challenge. I hope the user experience is logical and pleasant to work with.
 * I tried to replace the `master` branch with `main` but I think GitHub won't allow that when the repo is forked, so just make sure 
that you're running from main locally.
 * I need to sort offices for a company, by location. They currently are displayed in random order. 
 * The requirement of a user name was a little ambiguous, since there is no requirement for auth here, so I put this 
   requirement on a company name when adding a new company and on an employee first name (when adding a new employee). I felt that, 
   as those are the only forms here, that was where the spirit of the requirement would be.
   
## Future iterations

Other than what was mentioned above, I would really like to write some unit and end-to-end tests for this project. If I had more 
time, I would also dive into refreshing on Ruby/Rails and actually build this with a back end and authentication. Firebase 
allows authentication to be added really easily, but I feel that this full application would require more robust auth than 
what Firebase can provide. I would also have liked to make the presentation of data more pleasant to the eyes (ex. when viewing 
a building's detailed view), perhaps in a table presentation. Lastly, although Vue and Flexbox gave me a fair amount of responsiveness, 
I really didn't do any media queries and that should definitely be added. WAVE testing shows no errors and Lighthouse testing 
results were 94% or better for all views.

## Project setup

Clone this repo and then run

```
yarn install
```
Make sure you're running from `main` branch
```
git checkout main
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
