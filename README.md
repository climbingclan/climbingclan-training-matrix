# Google Apps Script Project for Event Management and Training

This project is a Google Apps Script application designed to manage events, training sessions, and member skills for a climbing or outdoor activity organization. It interacts with Google Sheets to store and manipulate data.

## Project Structure

The project consists of several JavaScript files, each handling different aspects of the application:

1. `Event Listing.js`: Manages event listings and related functionalities.
2. `Indoor Lead train the trainer.js`: Handles indoor lead climbing trainer certification.
3. `Indoor TR train the trainer.js`: Manages top rope climbing trainer certification.
4. `Intro to Lead Belay.js`: Handles introductory lead belay courses.
5. `Intro to Trad.js`: Manages introductory traditional climbing courses.
6. `Member Skillshare.js`: Facilitates skill sharing among members.
7. `Members Training.js`: Tracks and manages member training progress.
8. `Milestones.js`: Handles milestone tracking for members or events.
9. `QueryReport.js`: Generates reports based on queries.
10. `Sport advanced skills.js`: Manages advanced sport climbing skills training.
11. `Sport train the trainer.js`: Handles sport climbing trainer certification.
12. `Trad advanced skills.js`: Manages advanced traditional climbing skills training.
13. `Trad train the trainer.js`: Handles traditional climbing trainer certification.
14. `Training Data.js`: Manages and processes training data.
15. `intro to Outdoor Climbing.js`: Handles introductory outdoor climbing courses.
16. `misc functions.js`: Contains utility functions used across the project.

## Key Functions

The `misc functions.js` file contains several utility functions that are used throughout the project:

1. `appendToSheet(sheet, results)`: Appends data to a specified sheet.
2. `setColoursFormat(sheet, cellrange, search, colour)`: Applies conditional formatting to cells based on text content.
3. `setColoursFormatLessThanOrEqualTo(sheet, cellrange, search, colour)`: Applies conditional formatting to cells based on numeric values.
4. `setNumberFormat(sheet, cellrange, format)`: Sets the number format for a range of cells.
5. `setupSheet(name)`: Initializes a sheet with a given name, clearing existing formats.
6. `setupCell(name, range)`: Retrieves the value of a specific cell in a named sheet.

## How to Use

This project is designed to work within the Google Apps Script environment, integrated with Google Sheets. To use this project:

1. Open your Google Sheet.
2. Go to Tools > Script editor.
3. Copy the contents of each .js file into separate script files in the Apps Script editor.
4. Set up your Google Sheet with the necessary sheets and data structure.
5. Use the provided functions to manage events, training sessions, and member data.

## Customization

You can customize the project by modifying the individual .js files to suit your specific needs. Each file is dedicated to a particular aspect of the application, making it easier to locate and adjust functionalities as required.

## Note

This project requires Google Apps Script permissions to access and modify Google Sheets. Ensure you have the necessary permissions before running the scripts.

For more detailed information about each function and its usage, please refer to the comments within each JavaScript file.
