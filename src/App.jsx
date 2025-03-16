import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserLayout from './Layout'
import TestPage from './Shubham_features/testPage'

const App = () => {
  return (
    <Routes>
        <Route path="" element={<UserLayout />}>
          <Route
            path="/"
            element={<TestPage/>}
          />
        </Route>
      </Routes>

  )
}

export default App
