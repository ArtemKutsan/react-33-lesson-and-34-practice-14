import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/home';
import NotesPage from './pages/notes';
import AboutPage from './pages/about';
import NotFoundPage from './pages/not-found';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<NotesPage />} />
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="notes" element={<NotesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
