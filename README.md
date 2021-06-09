# Tracking App

This web application was designed by following the requirements, the UX design that I decided to create was a minimalist design where users can see the information clearly with all information on the middle page.

The page structure contains a header with the application logo and the link for navigating to another view, a footer, and a body where all information is shown.

The application has three views which are main view, detail view, and about view. The main view contains the search field for getting the repositories list of an organization from Github API, if the organization exists, repositories are going to be shown in a table with some relevant information about them, and there are a filter field for getting repository that users are looking for easier, and pagination where users can decide if they want to see 10, 25, or 100 repositories per page. Otherwise, an error dialog will be shown.

If users want to get to know more about a specific repository, they can click on one of them, and they will be redirected to the detail view, this view contains two sections, the first one shows information related to the repository such as organization, repository's name, description, last activity, and so on. Also, users can click on the track repo button for saving the repository information and all the activity that users have made like navigation, select a repo, use search field and filter field, and move between pages on the table.

On the other hand, the second one shows the commit activity in a list where each item contains the message, author's avatar, author's name, and when was pushed on the repository. Also, the author's avatars of most actives contributors have a star badge, so the three most active contributors have a gold star, the next two of them have a silver star, and the next five of them have a bronze star.

There is another one page which about page that shows my online references and last resources that caught my attention, I thought it was a good idea to add these questions on the application even though it was a requirement at all.

## FrontEnd

For creating the frontend part, I decided to use the material-UI library for developing the pages faster, and also I implemented the redux library because I thought it was a good opportunity to use redux, even though the application is small. It looks nice for iPhone 8 plus (414 x 736px), but it works for other devices as well.

I like the blue color and that is why I decided to use it for the application, and also I think it is a good choice for websites because of accessibility.

## BackEnd

For creating the backend part, I developed CRUD endpoints for activities and repositories, even though most of them are not used on the frontend, they are implemented on the frontend to use whenever is needed.

I created two models, one for repositories which contains all the information that I considered relevant to show from the Github API, and another one for activities which is defined as an object with two properties.

The first one is the collected activities which contain an array of activities that users made until they decided to track the repository, each activity is formed by the action that users made, and the data to identify what they did exactly.

On other hand, the second one is the date when users decided to track the repository.
