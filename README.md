<p align="center">
  <a href="https://github.com/CourseFlo/Flo/">
    <img src="/frontend/public/course-flo-original-icon-size.png" alt="Logo" width="80" height="80">
  </a>

  <h2 align="center">CourseFlo</h3>

  <p align="center">
    A better course viewing experience
    <br />
    <br />
    <a href="https://course-flo.herokuapp.com">Our App</a>
    ·
    <a href="https://github.com/CourseFlo/Flo/issues">Report Bug</a>
    ·
    <a href="https://github.com/CourseFlo/Flo/issues">Request Feature</a>
  </p>
</p>

![Heroku](https://heroku-badge.herokuapp.com/?app=course-flo&style=flat&svg=1)


[CourseFlo](https://course-flo.herokuapp.com) is designed to help students see the course relationships in an easy to use, compact manner. With this tool, students can explore courses across all departments without the need for back-and-forths and time wasted going down a rabbit hole of related courses.

Team: [Sepand](https://github.com/DSep), [Sam](https://github.com/sam-ip), [Brandon](https://github.com/beetai), [Guanting](https://github.com/baconandchips).

## Table of Contents

* [Project Requirements](#project-requirements)
* [Tech Overview](#tech-overview)
  * [Tech Stack](#tech-stack)
* [Above and Beyond](#description-of-"above-and-beyond"-functionality)
* [Discussion of Next Steps](#discussion-of-next-steps)
* [Development](#list-of-contributions)
* [Contributing](#contributing)


## Project requirements:
*   3-5 minimal requirements (will definitely complete)
    *   Backend: Build an MVP with [https://ubcexplorer.io/api](https://ubcexplorer.io/api) ✅
    *   FrontEnd/React: 
        *   We have Login/Signup Pages ✅
        *   We have a Visualizer page ✅
        *   Webpages can display text, images and/or tables to users ✅
    *   Database:
        *   Can store simple course data for frontend. ✅
*   3-7 "standard" requirements (will most likely complete)
    *   Backend: 
        *   Backend retrieves and updates user data as needed ✅
        *   Backend retrieves course data as queried or selected on frontend ✅
        *   User data endpoint, with additional personalization. ✅
        *   User login and signup, using custom auth + jwt tokens stored in store. ✅
    *   Frontend: 
        *   Visualizer page displays the selected course of the user in a 2D way. ✅
        *   Basic course search ✅
        *   User profile page ✅
        *   Personalization of courses to the user ✅
        *   User-friendly flow between pages 
    *   Database: 
        *   Store user’s ‘starred’ courses, store their degree program ✅
        *   Store user login info + passwords (hashed, of course) ✅
        *   Can store simple course data for frontend. ✅
    *   Deployed app to Heroku.
        *   Setup continuous deployment on Github actions. ✅
*   2-3 stretch requirements
    *   Backend:
        *   Modify [existing scraper](https://github.com/eyqs/req) to scrape data from UBC directly (We should use [the calendar](http://www.calendar.ubc.ca/vancouver/courses.cfm?page=name&code=CPSC) )
        *   Make an API out of our adapted scraper or DB data.
    *   Frontend:
        *   Visualizer can display the course relationships in 3D 🌕
        *   Visualizer can show multiple layers of depth in course relationships ✅
        *   Focus/view course details vs Overview of courses, prereqs, and dependents ✅
    *   Mix of vague ideas/stretch features:
        *   Backend: Recommend courses to add based on what courses you’ve taken (exploratory) 🌕
        *   Backend: System can retrieve degree programs, allowing users to view listings of full degree programs ✅
        *   Frontend: System can visualize the full course listing of the degree, allowing you to explore each course node as needed to see further req details
        *   Backend: Recommend courses to add to their degree program, based on need and what you’ve completed.

## Tech overview:
*   Unit 1:
    *   Rough prototypes were made for our app, which formed the basis of our development. HTML elements are mostly represented through JSX, which were blended in with Material-UI components. CSS (styling) is applied using the Material-UI module useStyles(). Finally, JavaScript established how the logic of our application will function and we could set the groundwork for when we move forward with React and Redux.
*   Unit 2:
    *   React and Redux were used to create the frontend of our app. Using React, we could create components to represent the various objects and elements as well as define functions and variables within each componenets to dictate their logic. Examples of components we created include the modal windows, the navbar, and the search course form. Redux allows centralizing of the data within our app inside a store, which can be managed through actions and reducers. Components can access this store to take data it needs to function. Prevalent applications of the Redux store include authentication, course visualization, and modal management.
*   Unit 3:
    *   We used MongoDB as our database, in which we defined one collection for courses and one for users. The information stored here is used as long term data storage, when data is not already stored in the backend or frontend.
*   Unit 4:
    *   Our backend (API) is constructed using ExpressJS, which we can use to define routes and models to serve the frontend the information it needs. In conjunction with REST, we could make frontend actions meaningful within the scope of the application. This is done by linking actions to their corresponding routes so that they may interact with the database properly. Model schema definitions were created using Mongoose while API calls and subsequent data management in the frontend were performed using Axios with Redux Thunk.
*   Unit 5:
    *   Our project is deployed on Heroku. We have continuous deployment set up with our Github repository, automatically deploying changes to our main branches to Heroku. It also goes through isolated beta and production stages, as well as having a separate dev environment.

## Tech Stack:
TypeScript\
ReactJS (HTML)\
Redux\
Node.js\
Express\
MongoDB (NoSQL)\
Mongoose\
Material UI (CSS)\
Heroku

## Description of "Above and Beyond" Functionality
*   Our visualizer was developed with the capability to dive deeper than just a layer of related courses, allowing for a high level view of all related courses for a selected course. And it does so while remaining nimble in course switching and rendering.
*   Our app was built to be fully responsive, usable on mobile, tablet and laptop screens. Introducing media queries based on dimensions of screen, and utilizing Material-UI's built-in responsive components helped achieve this.
*   We built a caching system for our high-traffic, high-quantity data (courses) to allow for a faster experience, in particular while navigating the visualizer.
*   Custom authentication system is built from scratch using JWT tokens and we store session information in a browser's storage so that the login status can persist
*   The search feature made use of the filtering UI and NoSQL query building in our backend, to quickly query the courses searched for in the DB.
*   We decided to push to use TypeScript and the Airbnb style (w/ ESLint), to force a rapidly evolving 4 person project to adhere to consistent coding standards.

## Discussion of Next Steps
*   Future implementations we have in mind include 3d visualization in a network-like fashion. This includes the ability to zoom in on a course and look at the direct dependents of the course at each layer. One would also be able to move up the network of pre-requisite courses in a visually pleasing manner to navigate through the progression of a course.
*   Another future implementation includes a course recommendation system. Given a students starred courses they have taken, recommend them courses based on similar (pre-requisite, degree requirements, similar concepts) courses offered. An addition to this implementation includes recommending based on most starred courses, and other parameters like the requirements left to a user’s degree.
*   Being able to visualize course data from other schools is another feature we'd like to add. We would need to format the data appropriately, and only then can a similar visualization can take place. Challenges we can see when implementing include having to handle multiple types of identifiers for courses, or having to parse multiple times for correct information.

### List of Contributions
*   [Sepand](https://github.com/DSep)
    *   Created the Search page frontend, with the search filtering.
    *   Visualization, backend + frontend
    *   Multilayered visualization
    *   Course data caching
    *   Course data acquisition and database population
    *   Backend work for course search
    *   Heroku deployment
*   [Sam](https://github.com/sam-ip)
    *   User info search+persistance to db (Starred Courses, username/email/password), backend API creation + frontend fetching/persisting
    *   Global UI theme applied to our application
    *   Styling/Responsiveness/Accessibility of profile page
*   [Brandon](https://github.com/beetai)
    *   Robust authentication system with authorization-required backend routes
    *   Design and implemented modal windows
    *   Frontend work for login and signup
    *   Backend work for course search
    *   Full stack work for user information handling (CRUD + Redux)
    *   Course data acquisition and database population
*   [Guanting](https://github.com/baconandchips)
    *   Dark Mode
    *   Improved UI/responsiveness on Homepage, Login, and Profile pages
    *   Extended searching abilities to Homepage and Navigation Bar


## Contributing:
We love feedback and improvements! If you feel like making some changes, just:
- Clone CourseFlo/Flo repo on your local environment: `git clone https://github.com/CourseFlo/Flo.git` in your local terminal.
- Create a `.env` file with variables `MONGO_URI` with your MongoDB and `JWT_SECRET` and your desired `PORT` defined.
- Install dependencies: run `npm install` inside both the `frontend` and `server`.
- Run the app, by running:
  - `npm start` in the `frontend`
  - `npm run devstart` in the `server`
