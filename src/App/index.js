import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import {
  About,
  AlphabeticalIndex,
  Bookmarks,
  Content,
  History,
  Hymn,
  Preface,
  Reference,
  Search,
  Settings
} from '../view/pages'
import StyledComponents from '../utils/sharedStyles'

const { StyledApp } = StyledComponents

function App ({ open, currentNumber, setCurrentNumber }) {
  const routes = [
    {
      path: '/arm-hymns',
      element: (
        <Hymn
          open={open}
          currentNumber={currentNumber}
          setCurrentNumber={setCurrentNumber}
        />
      )
    },
    { path: '/arm-hymns/settings', element: <Settings /> },
    { path: '/arm-hymns/about', element: <About /> },
    {
      path: '/arm-hymns/alphabetical',
      element: <AlphabeticalIndex setCurrentNumber={setCurrentNumber} />
    },
    {
      path: '/arm-hymns/bookmark',
      element: <Bookmarks setCurrentNumber={setCurrentNumber} />
    },
    {
      path: '/arm-hymns/content',
      element: <Content setCurrentNumber={setCurrentNumber} />
    },
    {
      path: '/arm-hymns/history',
      element: <History setCurrentNumber={setCurrentNumber} />
    },

    { path: '/arm-hymns/preface', element: <Preface /> },
    { path: '/arm-hymns/reference', element: <Reference /> },
    {
      path: '/arm-hymns/search',
      element: <Search setCurrentNumber={setCurrentNumber} />
    }
  ]

  return (
    <StyledApp>
      <CssBaseline />
      <Routes>
        {routes.map(route => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </StyledApp>
  )
}

export default App
