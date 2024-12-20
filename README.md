# PDF Reader Application

A React-based PDF reader application that fetches and displays a list of PDFs from an API. Users can search for PDFs, view their details, and read them in the browser.

## Table of Contents
- [Setup Instructions](#setup-instructions)
- [Assumptions](#assumptions)
- [Usage](#usage)
- [Deployment](#deployment)

## Setup Instructions

Follow these steps to get the application running locally:

1. Clone this repository:
    ```bash
    git clone https://github.com/yourusername/your-repository-name.git
    ```

2. Navigate to the project folder:
    ```bash
    cd your-repository-name
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the project locally:
    ```bash
    npm start
    ```

   This will run the application on `http://localhost:3000` in your browser.

## Assumptions

- The project uses an API endpoint to fetch PDF data (`https://api.npoint.io/dee51ea017d20efdfcc8`).
- The PDFs contain a `name`, `author`, `link`, and `thumbnail` (optional).
- If no thumbnail is provided, a default image is shown.

## Usage

- The application loads a list of PDFs from the API.
- You can search for PDFs by name using the search bar.
- Clicking on a PDF's details will open the PDF in a new view.
- You can read the PDF directly in the browser using an embedded iframe.

## Deployment

The project has been deployed online and can be accessed at the following link:
[Your Deployed Application Link](https://your-deployed-app-link.com)
