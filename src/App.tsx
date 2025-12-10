import TodoPage from "./Components/TodoApp/TodoPage";
import FakeProduct from "./Components/FakeProductReact/FakeProduct";
import EmployePage from "./Components/EmployeeManagement/EmployePage";
import MoviePage from "./Components/Movie/MoviePage";
import Counter from "./Components/Counter/Counter";
import MovieDetail from "./Components/Movie/Components/MovieDetail";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';



export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/movies" replace />} />
        <Route path="/movies" element={<MoviePage />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
        <Route path="/todopage" element={<TodoPage />} />
        <Route path="/employee" element={<EmployePage />} />
        <Route path="/fakeproduct" element={<FakeProduct />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );
}
