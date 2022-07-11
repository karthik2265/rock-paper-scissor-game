import React, { useEffect, useMemo, useState } from 'react'
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
  const userWon = false
  const navigate = useNavigate()

  return (
    <div className={classes['main-space']}>
      {/* userChoice */}
      <div className={classes['choice-component-space']}>
        <p>YOU PICKED</p>
        <div className={classes['winner']}>
          {nameToChoiceComponentsMap.get(userChoice)}
        </div>
      </div>
      {/* result win or lose or draw */}
      <div className={classes['result-space']}>
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
      </div>
      {/* machineChoice */}
      <div className={classes['choice-component-space']}>
        <p>THE HOUSE PICKED</p>
        <div className={classes['winner']}>
          {nameToChoiceComponentsMap.get(machineChoice)}
        </div>
      </div>
    </div>
  )
}

export { ResultSection }
