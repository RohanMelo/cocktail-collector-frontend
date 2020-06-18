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
import CreateCocktail from './pages/CreateCocktail'
import CocktailDetail from './pages/CocktailDetail'
import EditCocktail from './pages/EditCocktail'
import Auth from './pages/Auth'
import SignUp from './pages/SignUp'
import AuthContext from './shared/context/AuthContext'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
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
        <Route path="/cocktails/create" exact>
          <CreateCocktail />
        </Route>
        <Route path="/cocktails/:cocktailId" exact>
          <CocktailDetail />
        </Route>
        <Route path="/cocktails/update/:cocktailId" exact>
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

        <Route path="/auth">
          <Auth />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/cocktails/:cocktailId" exact>
          <CocktailDetail />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    )
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        userId: "user1",
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
