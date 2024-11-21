import './App.css';
import Header from './layouts/Header/Header';
import AppRoutes from './routesApp';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <AppRoutes />
      </BrowserRouter>

    </div>
  );
}

export default App;
