# Getting Started

## Running AcronLog

### Installation
1. Ensure that node.js is installed: https://nodejs.org/en
2. Clone this repository into a local directory: `git clone https://github.com/salamf/Acronym-Logger.git`
3. `cd` into the project directory: `cd Acronym-Logger`
4. Install dependencies: `npm install` or `npm i`

### Start
5. Start the webapp: `npm start`

This runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Learn More

### What is it?
AcronLog is a convenient web application that enables users to create, view, and manage acronym definitions. It is an easy-to-use web application that streamlines the process of managing acronyms.

### How it works
- Users can create acronyms by specifying a maximum length of 10 characters for the acronym and 60 characters for its definition. 
- The application ensures that empty acronyms cannot be created.
- All created acronyms are stored in a database for easy retrieval. 
- Stored acronyms are displayed in alphabetical order. 
- Users can search for an acronym and view its definition. If the search yields no result, the application displays "Not found". 
- Users can delete an acronym, and the application removes it from the database.

### Main Dependencies
- `firebase` (Cloud Firestore): NoSQL Database - used to store acronyms
- `react-bootstrap`: Premade and styled react components - used for buttons and grids
