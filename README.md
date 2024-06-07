# NestJS Monorepo

Welcome to the NestJS Monorepo! This repository contains a monorepo setup for a NestJS application, providing a scalable and maintainable architecture for developing large-scale applications.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Backend](#running-the-backend)
  - [Running the Frontend](#running-the-frontend)
  - [Running All Applications](#running-all-applications)
  - [Running Tests](#running-tests)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project is a monorepo setup for a NestJS application using Nx. It leverages the power of NestJS to build efficient and scalable server-side applications and Nx to manage the monorepo. The monorepo architecture allows for easy management of multiple projects within a single repository, promoting code reuse and simplifying dependency management.

## Features

- **Modular Architecture**: Organized by feature modules, promoting separation of concerns and code reuse.
- **Scalability**: Designed to handle large-scale applications with ease.
- **TypeScript**: Written in TypeScript, providing strong typing and modern JavaScript features.
- **Testing**: Comprehensive testing setup with Jest.
- **Documentation**: Clear and concise documentation to help you get started quickly.

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (>= 14.x)
- npm (>= 6.x)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Biot-Savart/nestjs-monorepo.git
   ```

2. Navigate to the project directory:

   ```bash
   cd nestjs-monorepo
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

### Running the Backend

1. Start the backend application in development mode:

   ```bash
   npx nx serve api
   ```

2. The backend application will be running at `http://localhost:3333`.

### Running the Frontend

If your monorepo includes multiple frontend applications, follow these steps to run them individually:

#### Angular Application

1. Start the Angular frontend application:

   ```bash
   npx nx serve angular-app
   ```

2. The Angular frontend application will be running at `http://localhost:4200`.

#### React Application

1. Start the React frontend application:

   ```bash
   npx nx serve react-app
   ```

2. The React frontend application will be running at `http://localhost:4201`.

#### Next.js Application

1. Start the Next.js frontend application:

   ```bash
   npx nx run next-app:start
   ```

2. The Next.js frontend application will be running at `http://localhost:4202`.

### Running All Applications

To run all applications (backend and all frontend applications) simultaneously using Nx, you can use the following command:

```bash
npx nx run-many --target=serve --projects=api,angular-app,react-app,next-app
```

The backend will be running at `http://localhost:3333`, and the frontend applications will be running at `http://localhost:4200`, `http://localhost:4201`, and `http://localhost:4202` respectively.

### Running Tests

To run the tests, use the following command:

```bash
npx nx test
```

## Project Structure

The project is organized as follows:

```
nestjs-monorepo/
├── apps/
│   ├── api/
│   ├── angular-app/
│   ├── react-app/
│   └── next-app/
├── libs/
│   ├── shared/
│   │   ├── data-access/
│   │   └── utils/
│   └── ui/
│       ├── components/
│       └── styles/
├── tools/
│   └── schematics/
├── .eslintrc.json
├── .prettierrc
├── nx.json
├── package.json
├── tsconfig.base.json
├── workspace.json
└── README.md
```

- **apps/**: Contains the application-specific modules.
  - **api/**: The backend application built with NestJS.
  - **angular-app/**: The Angular frontend application.
  - **react-app/**: The React frontend application.
  - **next-app/**: The Next.js frontend application.
- **libs/**: Contains shared libraries used across different applications.
  - **shared/**: Shared libraries including data access and utilities.
    - **data-access/**: Libraries for data access.
    - **utils/**: Utility libraries.
  - **ui/**: Shared UI components and styles.
    - **components/**: Shared UI components.
    - **styles/**: Shared styles.
- **tools/**: Contains custom tools and scripts for the workspace.
  - **schematics/**: Custom Nx schematics.
- **.eslintrc.json**: ESLint configuration file.
- **.prettierrc**: Prettier configuration file.
- **nx.json**: Nx configuration file.
- **package.json**: npm configuration file.
- **tsconfig.base.json**: Base TypeScript configuration file.
- **workspace.json**: Nx workspace configuration file.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
