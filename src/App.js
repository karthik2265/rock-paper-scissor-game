import './App.css'
import {
  Route,
  Routes,
  Navigate,
  useLocation,
  useNavigate,
} from 'react-router-dom'
import {
  Header,
  EasySection,
  HardSection,
  ResultSection,
  RulesModal,
} from './components/'
import { appContext } from './store'
import { useContext } from 'react'

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

  return (
    <div className='App'>
      <Header></Header>
      <div className='main'>
        <Routes>
          <Route path='/' element={<Navigate replace to='/easy' />}></Route>
          <Route path='/easy' element={<EasySection />}></Route>
          <Route path='/hard' element={<HardSection></HardSection>}></Route>
          <Route
            path='/result:difficulty:choice'
            element={<ResultSection />}
          ></Route>
        </Routes>
      </div>
      {appCtx.rulesModalIsOpen ? <RulesModal /> : null}
      <div className='buttons-space'>
        <div
          className='toggle-difficulty-btn'
          onClick={toggleDifficultyBtnClickHandler}
        >
          {location.pathname.includes('easy') ? 'HARD' : 'EASY'}
        </div>
        <div className='rules-btn' onClick={rulesBtnClickHandler}>
          RULES
        </div>
      </div>
    </div>
  )
}

export default App
