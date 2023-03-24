# Healthy

This directory contains the code for the Healthy app.

# Note

You need to open menu dropdown and click Login button to see other pages.

# Github

[https://github.com/vuong6101993/healthy](https://github.com/vuong6101993/healthy)

## Directory Structure

```

├── node_modules
├── public
├── srcs
│   ├── assets
│   │   ├── file.svg
│   │   └── file.jpg
│   │
│   ├── components
│   │   ├── Button
│   │   ├── Header
│   │   ├── Footer
│   │   ├── Logo
│   │   └── ... <public-components>
│   │
│   ├── context
│   │   └── Auth
│   │
│   ├── features
│   │   ├── Home
│   │   │   ├── components
│   │   │   │   ├── FoodList
│   │   │   │   ├── MenuSection
│   │   │   │   └── ... <private-components>
│   │   │   │ 
│   │   │   └── index
│   │   │  
│   │   ├── Public
│   │   │   ├── components
│   │   │   │   ├── List
│   │   │   │   ├── Recommend
│   │   │   │   └── ... <private-components>
│   │   │   │ 
│   │   │   └── index
│   │   │  
│   │   └── Record
│   │
│   ├── fonts
│   ├── layout
│   │   ├── default
│   │   └── public
│   │
│   └── mock
│       └── api
│
├── App
└── main

```

## Development

### Prerequisites

-   [Node.js](https://nodejs.org/en/) (v18.12.1)
-   [Yarn](https://yarnpkg.com/) (v1.22.19)
-   [React](https://reactjs.org/) (v18.2.0)

### Installation

```bash
$ yarn install
```

### Running the app

```bash
# development
$ yarn dev

# production mode
$ yarn build
$ yarn start
```
