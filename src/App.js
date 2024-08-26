import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AppRouter } from './AppRouter';
import './App.css';
import './bootstrap.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<AppRouter />} />
      </Routes>
    </Router>
  );
}

export default App;