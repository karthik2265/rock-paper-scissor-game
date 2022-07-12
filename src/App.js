// styles
import './App.css'
// navigation state
import {
  Route,
  Routes,
  Navigate,
  useLocation,
  useNavigate,
} from 'react-router-dom'
// components
import {
  Header,
  EasySection,
  HardSection,
  ResultSection,
  RulesModal,
} from './components/'
// app wide state
import { appContext } from './store'
import { useContext, useEffect } from 'react'
// framer-motion
import { motion } from 'framer-motion'

function App() {
  const location = useLocation()
  const navigate = useNavigate()
  const appCtx = useContext(appContext)

  // handler functions
  function rulesBtnClickHandler() {
    appCtx.setRulesModalIsOpen(true)
  }

  function toggleDifficultyBtnClickHandler() {
    if (location.pathname.includes('easy')) {
      navigate('/hard')
    } else {
      navigate('/easy')
    }
  }

  useEffect(() => {
    const App = document.getElementById('App')
    App.style.height = +window.innerHeight + 'px'
    console.log(App.style.height, window.innerHeight)
  }, [])

  return (
    <div id='App'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Navigate replace to='/easy' />}></Route>
        <Route path='/easy' element={<EasySection />}></Route>
        <Route path='/hard' element={<HardSection></HardSection>}></Route>
        <Route
          path='/result/:difficulty/:userChoice/:machineChoice'
          element={<ResultSection />}
        ></Route>
      </Routes>
      {appCtx.rulesModalIsOpen ? <RulesModal /> : null}
      <div className='buttons-space'>
        <motion.div
          className='toggle-difficulty-btn'
          onClick={toggleDifficultyBtnClickHandler}
          whileTap={{ scale: 0.9 }}
        >
          {location.pathname.includes('easy') ? 'HARD' : 'EASY'}
        </motion.div>
        <motion.div
          className='rules-btn'
          onClick={rulesBtnClickHandler}
          whileTap={{ scale: 0.9 }}
        >
          RULES
        </motion.div>
      </div>
    </div>
  )
}

export default App
