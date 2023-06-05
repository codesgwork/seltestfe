import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SharedNavBar } from './routes/SharedNavBar';
import { Courses } from './views/Courses';
import { Landing } from './views/Landing';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedNavBar />}>
          <Route index element={<Landing />} />
          <Route path='courses' element={<Courses />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
