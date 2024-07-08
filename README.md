# Typing Game using JavaScript

This project demonstrates the implementation of a Typing Game using JavaScript. The game tests and improves your typing speed and accuracy by providing random paragraphs for you to type within a set time limit.

## Introduction

The Typing Game is a fun and educational tool that helps users enhance their typing skills. It uses core JavaScript concepts such as DOM manipulation, event handling, and interval management to create an interactive and engaging experience.

## Getting Started

To get started with this project, clone the repository or download the files. Open the `index.html` file in your browser to play the Typing Game.

## Files Included

- `index.html`: Contains the structure of the game.
- `style.css`: Contains the styles for the game.
- `script.js`: Contains the JavaScript code to make the game functional.

## HTML Structure

The `index.html` file defines the structure of the Typing Game.

## CSS Styling

The `style.css` file is used to style the game. Customize the appearance of the Typing Game by modifying this file.

## JavaScript Functionality

The `script.js` file contains the JavaScript code that makes the game functional.

### Explanation of the JavaScript Code

1. Selecting Elements: Variables are used to reference different elements in the DOM, such as the typing text, input field, timer, mistakes count, WPM (words per minute), and CPM (characters per minute).
2. Set Values: Initialize variables for the timer, maximum time, time left, character index, mistake count, and typing status.
3. Loading Paragraphs: The `loadParagraph` function loads a random paragraph from a predefined list and displays it on the screen.
4. Handling User Input: The `initTyping` function checks the user's input against the displayed text and updates the mistake count, WPM, and CPM accordingly.
5. Managing Time: The `initTime` function updates the time left and calculates the WPM.
6. Resetting the Game: The `reset` function reloads a new paragraph and resets all variables and displayed values.

## How to Use

1. Open the `index.html` file in your web browser.
2. Start typing the displayed text in the input field.
3. Monitor your time, mistakes, WPM, and CPM.
4. Click the "Reset" button to start a new game.

## Conclusion

The Typing Game is a practical project that demonstrates key JavaScript concepts, including DOM manipulation, event handling, and interval management. By understanding and modifying this project, you can enhance your JavaScript skills and create interactive web applications.