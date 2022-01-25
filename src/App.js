import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import db from './data/db.json';
import Crew from './pages/Crew';
import Destination from './pages/Destination';
import Home from './pages/Home';
import Technology from './pages/Technology';

function App() {
  const data = db;

  return (
    <Router>
      <main className="app">
        
        <section className="content">
          {/* Navigation Bar */}
          <Navigation />
        
          {/* Routing */}
          <Routes>
            <Route exact path="/"  element={ <Home /> } />
            <Route exact path="/destination" element={ <Destination data={ data }/> } />
            <Route exact path="/crew" element={ <Crew crewData={ data.crew } /> }/>
            <Route exact path="/technology" element={< Technology />  }/>
          </Routes>
        </section>
      </main>
    </Router>
  );
}

export default App;
