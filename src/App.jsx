import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IdeasPage from './pages/IdeasPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<IdeasPage />} />
        <Route path='/ideas' element={<IdeasPage />} />
        <Route path='/about' element={<IdeasPage />} />
        <Route path='/work' element={<IdeasPage />} />
        <Route path='/services' element={<IdeasPage />} />
        <Route path='/contact' element={<IdeasPage />} />
        <Route path='/careers' element={<IdeasPage />} />
      </Routes>
    </Router>
  );
}

export default App;
