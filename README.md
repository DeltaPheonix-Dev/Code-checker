# Code Analyzer

Code Analyzer is a web application built with Node.js and Express that allows users to analyze code snippets in various programming languages for validation and potential improvements.

![Code Analyzer Screenshot](screenshot.png)

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Language Support:** Supports validation of code in multiple programming languages including HTML, CSS, JavaScript, Java, SQL, React, Rust, and Node.js.
- **Error Handling:** Provides detailed error messages and suggestions for improvements based on the analysis of the code.
- **Input Validation:** Utilizes express-validator for input validation and sanitization to prevent security vulnerabilities such as code injection attacks.
- **Dependency Check:** Checks for the presence of necessary libraries and dependencies before executing code analysis.

## Installation

1. **Clone the repository:**
   
   ```bash
   git clone https://github.com/yourusername/code-analyzer.git
   ```

2. **Navigate to the project directory:**
   
   ```bash
   cd code-analyzer
   ```

3. **Install dependencies:**
   
   ```bash
   npm install
   ```

4. **Run the server:**
   
   ```bash
   node server.js
   ```

5. **Access the application:**
   
   Open your web browser and navigate to `http://localhost:3000`.

## Usage

1. **Upload or Paste Code:**
   
   - Upload or paste your code snippet into the provided text area.
   - Select the programming language of your code from the dropdown menu.

2. **Analyze Code:**
   
   - Click the "Analyze Code" button to initiate the analysis.

3. **View Results:**
   
   - View the analysis results, including error messages and suggestions for improvements.

## Technologies Used

- **Node.js:** A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express:** A web application framework for Node.js that provides a robust set of features for web and mobile applications.
- **express-validator:** A set of express.js middlewares that wraps validator.js validator and sanitizer functions.
- **eslint:** A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
- **rustfmt:** A tool for formatting Rust code according to style guidelines.

## Dependencies

- express: ^4.17.1
- express-validator: ^6.12.1
- eslint: ^7.32.0 (for JavaScript and React code validation)
- rustfmt: (for Rust code validation)

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
