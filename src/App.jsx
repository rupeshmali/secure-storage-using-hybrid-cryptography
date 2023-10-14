import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { PATHS } from './utils/constants'
import About from './pages/About'
import { AppShell } from '@mantine/core'
import Navbar from './components/common/Navbar'
import Header from './components/common/Header'

const App = () => {
  return (

    <AppShell
      padding="md"
      navbar={<Navbar >{/* Navbar content */}</Navbar>}
      header={<Header >{/* Header content */}</Header>}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      {/* Your application here */}


      <Routes>
        <Route path={PATHS.HOME} element={<Home />} />
        <Route path={PATHS.ABOUT} element={<About />} />
      </Routes>
    </AppShell>
  )
}

export default App