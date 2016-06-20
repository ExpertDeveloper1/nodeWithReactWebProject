// react
import React from 'react';
import { Link } from 'react-router';

import Header from '../pages/header';
import Footer from '../pages/footer';

import './main.css';

// main class
const App = React.createClass({

  render() {
    return (
      <div>
        <Header />
        <main>
          <nav className="mainNav">
            <ul>
               <li key="1"><Link to = "/account" > 账号管理 </Link></li>
               <li key="3"><Link to = "/system" > 系统设置 </Link></li>
            </ul>
          </nav>
          <div className="content">
            { this.props.children}
          </div>
        </main>
        <Footer />
      </div>
    );
  },
});

export default App;
