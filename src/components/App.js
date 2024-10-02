import React  from 'react';
import {Link} from 'react-router-dom';

const App = (props) => {
  return (
    <div className="container">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/companies">Companies</Link></li>
              <li><Link to="/download">Download</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default App;
