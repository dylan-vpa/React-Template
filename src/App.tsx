//React
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Pages
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/settings" element={<h1>Settings</h1>} />
            <Route path="/profile" element={<h1>Profile</h1>} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}