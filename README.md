# Swag Labs Inventory Website (saucedemo.com) 🚀

This test automation sample project contains **Swag Labs Inventory Website (saucedemo.com)** using **Cypress** and **Mocha** framework for testing. It conducts two tests for the **Login form** with the flexibility to run them in **headless** and **headed** modes. 🌐

## Table of Contents 📚

- [Installation](#installation)
- [Running the Tests](#running-the-tests)
  - [Headless Mode](#headless-mode)
  - [Headed Mode](#headed-mode)
- [Features](#features)

---

## Installation 🛠️

### 1. Create a Project Folder
- On your desktop, create a folder named 'cypressProjects'.

### 2. Clone the Repository

```bash
cd ~/Desktop/SeleniumJS-Projects
git clone https://github.com/regie2197/selenium-js-parabank-demo.git
```
### 3. Install Dependencies

```bash
cd selenium-parabank-demo
npm install
``` 

## Running the Tests 🏃‍♂️
- We have spec file (a Test Code/File) Login and Registration features, and they can be run in both headless and headed modes.

### Headless Mode 🧑‍💻 (Without Browser UI)

1. Login Test (Headless)
- To run the login test in headless mode:

```bash
npm run login-test
```

### Headed Mode 🖥️ (With Browser UI)
- In headed mode, the browser runs with a visible UI. This mode is useful for debugging and visual verification of test actions.

1. Login Test (Headed)
- To run the login test in headed mode:

```bash
npx cypress open
```
- Select E2E Testing
- Select Google Chrome browser
- Click "Start E2E Testing in Chrome"

## Features ✨

- **Login Test**: Automates the login functionality using valid and invalid credentials on the ParaBank Demo website.
- **Headless Mode**: Run the tests without opening the browser window for faster execution.
- **Headed Mode**: Run the tests with the browser window open, useful for debugging and visual checks.


