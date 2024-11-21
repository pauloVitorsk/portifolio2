import { Route, Routes } from 'react-router-dom';
import Body from './layouts/body/Body';
import About from './layouts/about-me/About';

const AppRoutes = () => {
    return (
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/about" element={<About />} />
        </Routes>
    )
}
export default AppRoutes;