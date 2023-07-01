# VideoGamesReact

React app which stores data on different video games including their Title, Release Date, Developer, and Price and allows the user to perform CRUD operations.



REST API written in C# using Visual Studio project template: ASP.NET Core with React.js (Web)

Database created and managed using Microsoft SQL Server and Visual Studio project template: SQL Server Database Project

Insight.Database used as micro-ORM

Yup and formik used for form validation



How to run:

1. Clone this repo
2. Check that you have SQL Server Express LocalDB on your machine (and that it's configured to use Windows Authentication)
3. Use the publish.xml file to publish the database to your LocalDB
4. Check that you have Node.js installed on your machine
5. Use cmd to navigate to the ClientApp folder and run `npm install` to install required dependencies
6. Use Ctrl F5 (in Visual Studio) which should build and run the solution
7. The webpage should open in your browser
8. Make CRUD operations to your LocalDB from there