<h1>Aegis</h1>

A simple and secure way to share sensitive information with people.

## Table of Contents

- [Features](#features)
  - [Roadmap](#roadmap)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Build and Run](#build-and-run)
    - [Commands](#commands)
  - [Environment Variables](#environment-variables)
- [License](#license)

# Features

- [x] Create a message and share it with a link
  - [x] The link is only active for 15 minutes
  - [x] The link is only active for 1 view
- [x] Delete the message after the first view

## Roadmap

- [ ] Allow the user to set the expiration time
- [ ] Allow the user to set the number of views
- [ ] Allow the user to set a password
- [ ] Have accounts to manage messages, see how many views, etc.

# Getting Started

## Prerequisites
- [Node.js](https://nodejs.org/en/) >= 14.0.0

## Installation

```bash
git clone https://github.com/mir-mirsodikov/aegis
cd aegis
npm install
```

## Build and Run

### Commands

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the server in development mode |
| `npm run build`   | Build the project for production     |
| `npm run preview` | Start the server in production mode  |


## Environment Variables

| Variable       | Description                                                   |
| -------------- | ------------------------------------------------------------- |
| `DATABASE_URL` | The URL of the database                                       |
| `SECRET_KEY`   | The secret key used to encrypt the messages                   |
| `SECRET_IV`    | The secret initialization vector used to encrypt the messages |


# License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
