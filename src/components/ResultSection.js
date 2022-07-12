import React, { useContext, useEffect, useState } from 'react'
// state
import { appContext } from '../store'
// navigation
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
// images
import { ReactComponent as RockImage } from '../images/icon-rock.svg'
import { ReactComponent as PaperImage } from '../images/icon-paper.svg'
import { ReactComponent as ScissorsImage } from '../images/icon-scissors.svg'
import { ReactComponent as SpockImage } from '../images/icon-spock.svg'
import { ReactComponent as LizardImage } from '../images/icon-lizard.svg'
// styles
import classes from './ResultSection.module.css'
// framer-motion
import { motion } from 'framer-motion'

// name to choices components map
const nameToChoiceComponentsMap = new Map([
  [
    'rock',
    <div className={classes['img-space'] + ' ' + classes['rock-img-space']}>
      <RockImage />
    </div>,
  ],
  [
    'paper',
    <div className={classes['img-space'] + ' ' + classes['paper-img-space']}>
      <PaperImage />
    </div>,
  ],
  [
    'scissors',
    <div className={classes['img-space'] + ' ' + classes['scissors-img-space']}>
      <ScissorsImage />
    </div>,
  ],
  [
    'spock',
    <div className={classes['img-space'] + ' ' + classes['spock-img-space']}>
      <SpockImage />
    </div>,
  ],
  [
    'lizard',
    <div className={classes['img-space'] + ' ' + classes['lizard-img-space']}>
      <LizardImage />
    </div>,
  ],
])

const ResultSection = () => {
  const { difficulty, userChoice, machineChoice } = useParams()
  const appCtx = useContext(appContext)
  let [userWon, setUserWon] = useState(null)
  setTimeout(() => {
    setUserWon(didUserWin(userChoice, machineChoice))
  }, 3300)
  const navigate = useNavigate()

  useEffect(() => {
    if (userWon) {
      appCtx.setScore((s) => s + 1)
    } else {
      appCtx.setScore((s) => s - 1)
    }
  }, [])

  return (
    <div className={classes['main-space']}>
      <div className={classes['choice-component-space']}>
        <p>YOU PICKED</p>
        <motion.div
          initial={{
            x: -800,
          }}
          animate={{
            x: 0,
            transition: {
              delay: 0.3,
              duration: 1,
            },
          }}
          className={userWon === true ? classes['winner'] : ''}
        >
          {nameToChoiceComponentsMap.get(userChoice)}
        </motion.div>
      </div>
      <motion.div
        initial={{
          scale: 0,
        }}
        animate={{
          scale: 1,
          transition: {
            delay: 3.3,
            duration: 0.5,
          },
        }}
        className={classes['result-space']}
      >
        <p>{userWon ? 'YOU WIN' : 'YOU LOSE'}</p>
        <motion.div
          whileTap={{
            scale: 0.9,
          }}
          onClick={() => {
            navigate(`/${difficulty}`)
          }}
        >
          PLAY AGAIN
        </motion.div>
      </motion.div>
      <div className={classes['choice-component-space']}>
        <p>THE HOUSE PICKED</p>
        <motion.div
          initial={{
            x: 800,
          }}
          animate={{
            x: 0,
            transition: {
              duration: 1,
              delay: 1.75,
            },
          }}
          className={userWon === false ? classes['winner'] : ''}
        >
          {nameToChoiceComponentsMap.get(machineChoice)}
        </motion.div>
      </div>
    </div>
  )
  // utility funcs
  function didUserWin(userChoice, machineChoice) {
    let userWon
    // rock
    if (userChoice === 'rock' && machineChoice === 'paper') userWon = false
    else if (userChoice === 'rock' && machineChoice === 'scissors')
      userWon = true
    else if (userChoice === 'rock' && machineChoice === 'spock') userWon = false
    else if (userChoice === 'rock' && machineChoice === 'lizard') userWon = true
    // paper
    else if (userChoice === 'paper' && machineChoice === 'rock') userWon = true
    else if (userChoice === 'paper' && machineChoice === 'scissors')
      userWon = false
    else if (userChoice === 'paper' && machineChoice === 'spock') userWon = true
    else if (userChoice === 'paper' && machineChoice === 'lizard')
      userWon = false
    // scissors
    else if (userChoice === 'scissors' && machineChoice === 'rock')
      userWon = false
    else if (userChoice === 'scissors' && machineChoice === 'paper')
      userWon = true
    else if (userChoice === 'scissors' && machineChoice === 'spock')
      userWon = false
    else if (userChoice === 'scissors' && machineChoice === 'lizard')
      userWon = true
    // spock
    else if (userChoice === 'spock' && machineChoice === 'rock') userWon = true
    else if (userChoice === 'spock' && machineChoice === 'paper')
      userWon = false
    else if (userChoice === 'spock' && machineChoice === 'scissors')
      userWon = true
    else if (userChoice === 'spock' && machineChoice === 'lizard')
      userWon = false
    // lizard
    else if (userChoice === 'lizard' && machineChoice === 'rock')
      userWon = false
    else if (userChoice === 'lizard' && machineChoice === 'paper')
      userWon = true
    else if (userChoice === 'lizard' && machineChoice === 'scissors')
      userWon = false
    else if (userChoice === 'lizard' && machineChoice === 'spock')
      userWon = true
    return userWon
  }
}

export { ResultSection }
