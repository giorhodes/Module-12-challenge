# Module-12-challenge
Team Profile Generator
This is a Node.js command-line application that generates an HTML file displaying the team members and their information. The application prompts the user to enter information about the team manager, engineers, and interns. The user can add as many engineers and interns as they wish.

Usage
To use this application, follow these steps:

Clone the repository to your local machine.
Navigate to the root directory of the project in your terminal.
Run the command npm install to install the necessary dependencies.
Run the command node index.js to start the application.
Follow the prompts to enter information about the team manager, engineers, and interns.
Dependencies
This application uses the following dependencies:

inquirer - for collecting user input
path - for working with file and directory paths
fs - for interacting with the file system
Files
index.js - the entry point for the application
lib/Manager.js - defines the Manager class
lib/Engineer.js - defines the Engineer class
lib/Intern.js - defines the Intern class
src/page-template.js - contains the HTML template for the generated file
dist/team.html - the generated HTML file will be saved to this directory
How it Works
The application begins by prompting the user to enter information about the team manager. After the manager's information is entered, the user can choose to add an engineer or an intern. If the user selects engineer or intern, they are prompted to enter information about that team member. The user can continue adding team members until they choose to stop.

After all team members have been entered, the application generates an HTML file that displays the team members and their information. The file is saved to the dist directory.
