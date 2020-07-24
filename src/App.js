import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import firebase from './config';
import 'firebase/auth';
import Admin from './components/Admin/Admin';
import { Spinner } from 'react-bootstrap';
import AdminPage from './components/Admin/AdminPage';
import ArtikelDetail from './components/Admin/ArtikelDetail';
import Beranda from './components/Beranda/Beranda';
import Footer from './components/Footer/Footer';
import Pengenalan from './components/Pengenalan/Pengenalan';
import KritikSaran from './components/KritikSaran/KritikSaran';
import Artikel from './components/Artikel/Artikel';
import AnalisisUsaha from './components/AnalisisUsaha/AnalisisUsaha';
import Masalah from './components/Masalah/Masalah';

function App() {
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setAuthenticated(true);
        setReady(true);
      } else {
        setAuthenticated(false);
        setReady(true);
      }
    })
  }, [])

  const [ready, setReady] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  console.log(authenticated);
  return (
    <BrowserRouter>
      <Switch>
        <>
          {ready ?
            <div className="App">
              {authenticated ?
                <>
                  {window.location.pathname !== '/adminpage' && window.location.pathname !== '/artikel-detail' ? <Redirect to='/adminpage' /> : <Redirect to={window.location.pathname} />}
                  <Route exact path='/adminpage' component={AdminPage} />
                  <Route
                    path="/artikel-detail"
                    render={(routeProps) => (
                      <ArtikelDetail {...routeProps} />
                    )}
                  />
                </>
                :
                <>
                  {window.location.pathname === '/admin' && !authenticated ? <Redirect to={window.location.pathname} /> : window.location.pathname === '/adminpage' && !authenticated ? <Redirect to='/' /> : <Redirect to={window.location.pathname} />}
                  <Navbar />
                  <Route exact path='/' component={Beranda} />
                  <Route exact path='/pengenalan' component={Pengenalan} />
                  <Route exact path='/artikel' component={Artikel} />
                  <Route exact path='/analisis-usaha' component={AnalisisUsaha} />
                  <Route exact path='/kritiksaran' component={KritikSaran} />
                  <Route exact path='/masalah' component={Masalah} />
                  <Route exact path='/admin' component={Admin} />


                  <div style={{
                    marginTop: 100
                  }}>
                    <Route path='/artikel-detail' component={ArtikelDetail} />
                  </div>
                  <Footer />
                </>}
            </div>
            :
            <div style={{
              width: '100%',
              height: '100vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgb(53, 75, 78)'
            }}>
              <Spinner animation='border' style={{ color: 'lightblue' }} />
            </div>}
        </>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
