# Movie App

A React application for browsing movies with search functionality and detailed views.

## Quick Start

## 1. Install Dependencies

npm install
2. Start Servers

### Frontend (React App):
npm run dev
Runs on: http://localhost:5173

### Movie Database:
npx json-server --port 3002 movie.json
API: http://localhost:3002/movies

### Employee Database:
npx json-server --port 3001 db.json
API: http://localhost:3001/employees

## 2. Available Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Redirect to `/movies` | Home page redirect |
| `/movies` | `MoviePage` | Movie listing with search |
| `/movies/:id` | `MovieDetail` | Movie details page |
| `/todopage` | `TodoPage` | Todo application |
| `/employee` | `EmployePage` | Employee management |
| `/fakeproduct` | `FakeProduct` | Product listing |
| `/counter` | `Counter` | Counter component |# Cheng-ChayLim-react-W3
