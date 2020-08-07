[CourseFlo](https://course-flo.herokuapp.com) (subject to name change) is designed to help students see the required pre-req and co-req’s that they need before graduation in a visually pleasing manner, and allows users to explore their degree programs to better understand their options. It will store data in the form of user login, preferences, and saved courses, as well as scraped and stored UBC SSC course data. Our additional functionalities that we could add or remove are: a complete API system to scrape and parse SSC data as a standalone repository, a visualizer that can display courses in 3d, and a recommender system that can give suggestions towards where we can take further courses in the future.

Team: [Sepand](https://github.com/DSep), [Sam](https://github.com/sam-ip), [Brandon](https://github.com/beetai), [Guanting](https://github.com/baconandchips).

*   Project Description:
    *   Who is it for? Students
    *   What will it do? (What "human activity" will it support?) We have the following user stories:
        *   As a user, I want to be able to create an account to store my info: (name, email, course schedule, recent searches);
        *   As a user, I want to be able to browse and save my courses (based off course schedule); and
        *   As a user, I want to be able to browse courses, choosing to visualize them in a tree, connected to their pre-reqs coreqs.
    *   What type of data will it store?
        *   User login, prefs, saved courses, recent searches
        *   We scrape and store all the SSC course data, every time it is updated by UBC
        *   The user can access this in a beautified format
    *   What will users be able to do with this data?
        *   See the required pre-req/co-req’s that they may need before graduation in a visually pleasing manner
        *   Explore degree programs, for users such as prospective students, to understand their options and 
    *   What is some additional functionality you can add/remove based on time constraints?


*   Project task requirements:
    *      3-5 minimal requirements (will definitely complete)
        *   Backend: just call [https://ubcexplorer.io/api](https://ubcexplorer.io/api)
            *   As a minimal requirement, we will be using the ubc explorer api. May eventually aim to use our own scraper
        *   FrontEnd/React: 
            *   We have Login/Signup Pages
            *   We have a Visualizer page
            *   Webpages can display text, images and/or tables to users
        *   Database:
            *   Can store simple course data for frontend.
    *      3-7 "standard" requirements (will most likely complete)
        *   Backend: 
            *   Backend retrieves and updates user data as needed
            *   Backend retrieves course data as queried or selected on frontend
            *   User data endpoint, with additional personalization.
            *   User login and signup, using custom auth + jwt tokens stored in store.
        *   Frontend: 
            *   Visualizer page displays the selected course of the user in a 2D way.
            *   Basic course search
            *   User profile page
            *   Personalization of courses to the user
            *   User-friendly flow between pages
        *   Database: 
            *   Store user’s ‘starred’ courses, store their degree program
            *   Store user login info + passwords (hashed, of course)
            *   Can store simple course data for frontend.
        *   Deployed app to Heroku.
            *   Setup continuous deployment on Github actions.
    *      2-3 stretch requirements (plan to complete 1!)
        *   Backend:
            *   Modify [existing scraper](https://github.com/eyqs/req) to scrape data from UBC directly (We should use [the calendar](http://www.calendar.ubc.ca/vancouver/courses.cfm?page=name&code=CPSC) )
            *   Make an API out of our adapted scraper or DB data.
        *   Frontend:
            *   Visualizer can display the course relationships in 3D
            *   Visualizer can show multiple layers of depth in course relationships
            *   Focus/view course details vs Overview of courses, prereqs, and dependents
        *   Mix of vague ideas/stretch features:
            *   Backend: Recommend courses to add based on what courses you’ve taken (exploratory)
            *   Backend: System can retrieve degree programs, allowing users to view listings of full degree programs
            *   Frontend: System can visualize the full course listing of the degree, allowing you to explore each course node as needed to see further req details
            *   Backend: Recommend courses to add to their degree program, based on need and what you’ve completed.

*   Breakdown of 2 minimum requirements into ~2-5 smaller tasks:
    *   Backend: 
        *   Complete an analysis and hacky test of the current ubcexplorer.io API, to figure out the data structure
        *   Parse and organize the data in a way that allows fast access
        *   Create an algorithm that, given a course, can find all the courses that it requires (recursively)
        *   Display that list in a simple text format
    *   FrontEnd: 
        *   Choose UI library for components in React
        *   Individual pages with navigation between them
        *   Actions (login, signup, add/delete courses, **visualize courses**, db querying/storing for each of the pages)

*   How tech is used from Units 1-5:
    TODO Check with rubric, it needs in-depth understanding of topics and perhaps a compare-and-contrast with how our technology differs from other technologies available out there
    *   Unit 1:
        *   Rough prototypes were made for our app, which formed the basis of our development.
        *   HTML elements are mostly represented through JSX, blended in with Material-UI components.
        *   CSS is contained within useStyles() components from the Material-UI module.
        *   Javascript is the basis for our Typescript-based app.
    *   Unit 2:
        *   React and Redux are implemented in the Frontend portion of our app. The parts that use actions and reducers include: authentication, courses, course visualization, error, modal, search, and user.
    *   Unit 3:
        *   Our database is in MongoDB, with one database on courses and one database collection of size 5240 (all UBC courses of 2019), and one database collection for users. 
    *   Unit 4:
        *   Our database is connected to our service through frontend Axios, middleware Redux-Thunk and our backend database calls. TODO: Get, Update, Delete, Put, Post requests labelled here
    *   Unit 5:
        *   Our project is deployed on Heroku. (TODO add in more details on here.)

*   Description of "Above and Beyond" Functionality
    *   The Visualizer portion of our app involved a lot of in-house solutions towards implementation, as there is decidedly a lack of reference materials available for what we wanted to accomplish.

*   Discussion of Next Steps
    *   We would like to have 3D Visualization available for the future.
    *   Having course recommendations is an immediate next step that we can take.
    *   Adding in Night Mode would require several refactors across the frontend, but that is an actionable next step as well.

*   List of Contributions
    *   Sepand
        *   
    *   Sam
        *   Profile Page functionality (user info persistance to db, endpoints associated with persistance, navigation between the other pages, styling/responsiveness/accessibility)
    *   Brandon
        *   
    *   Guanting
        *   

(TODO Discuss our naming conventions and coding style. Airbnb guidelines. Optional. Also double-check what we have against rubric)
