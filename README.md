# calendar
# Angular Calendar App

This project is an Angular-based calendar application that allows users to navigate through dates and days and add tasks to specific days. It serves as a simple task management tool with an intuitive interface for handling daily tasks.

## Features

  * Date Navigation: Users can navigate through months and days, moving forward and backward in the calendar.
  * Task Management: Users can add, view, and manage tasks for specific days.
  * Responsive Design: The application is fully responsive, adjusting seamlessly to different screen sizes.
    
## Technologies Used

  * Angular: A popular framework for building single-page applications.
  * TypeScript: Superset of JavaScript used for the logic and functionality.
  * HTML5: For the structure of the app.
  * CSS3: For styling the user interface.

## Getting Started

Follow these instructions to set up the project locally.

## Prerequisites

  * Node.js: Make sure you have Node.js installed. [Download Node.js](https://nodejs.org/)

  * Angular CLI: Install Angular CLI globally using the following command:
    ```
    npm install -g @angular/cli
    ```
## Installation

  ### 1. Clone the repository :

  ```
  git clone https://github.com/MOQRAN/calendar.git
  ```

### 2. Install the required dependencies:

  ```
  npm install
  ```

## Running the Application

 To start the development server, run:

  ```
  ng serve
  ```
 Once the server starts, open your browser and go to:

  ```
  http://localhost:4200/
  ```

You should now see the calendar application.

## Building the Application

To build the project for production, use the command:

  ```
  ng build
  ```
The build artifacts will be stored in the `dist/` directory.

## Usage

  * Navigating through the calendar: Use the previous and next buttons to move between months.
  * Adding tasks: Select a day on the calendar and input your task into the provided field.
  * Viewing tasks: Click on a day with tasks to view the details.

## Folder Structure
```
src/
├── app/
│   ├── models/
│   │   └── task.model.ts            # task's properties
│   │   └── tasksOfADay.model.ts     # all the tasks of a given day's properties
│   ├── services/                    # Services for handling task storage and logic
│   └── app.module.ts                # Main module of the application
├── assets/                          # Images, icons, etc.
├── environments/                    # Environment settings for dev/production
└── index.html                       # Entry point for the web app
```


## Contributing

If you'd like to contribute to this project, feel free to submit a pull request. Contributions are always welcome!

  ### 1. Fork the repository
  ### 2. Create a new branch `git checkout -b feature/your-feature`
  ### 3. Commit your changes `git commit -m 'Add some feature`
  ### 4. Push to the branch `git push origin feature/your-feature`
  ### 5. Open a pull request



## Contact

For any questions or suggestions, feel free to reach out at:

***Mohammed MOQRAN***

mohammedmoqran18@gmail.com
:grin:




