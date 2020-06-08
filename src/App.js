import React, { useState, useCallback } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

import MainNavigation from './components/Navigation/MainNavigation'
import Home from './pages/Home'
import Collection from './pages/Collection'
import AddCocktail from './pages/AddCocktail'
import EditCocktail from './pages/EditCocktail'
import Auth from './pages/Auth'
import AuthContext from './shared/context/AuthContext'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(false);

  const login = useCallback(uid => {
    setIsLoggedIn(true)
    setUserId(uid)
  }, [])

  const logout = useCallback(() => {
    setIsLoggedIn(false)
    setUserId(null)
  }, [])

  let routes

  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/:userId/collection" exact>
          <Collection />
        </Route>
        <Route path="/cocktails/add" exact>
          <AddCocktail />
        </Route>
        <Route path="/cocktails/:cocktailId" exact>
          <EditCocktail />
        </Route>
        <Redirect to="/" />
      </Switch>
    )
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/:userId/collection" exact>
          <Collection />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    )
  }
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        userId,
        login,
        logout
      }}
    >
      <Router>
        <MainNavigation />
        <main>{routes}</main>
      </Router>
    </AuthContext.Provider>
  );
}

export default App
