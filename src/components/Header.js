import React, { useContext } from 'react'
import classes from './Header.module.css'
import { useLocation, useParams } from 'react-router-dom'
import { appContext } from '../store'

const Header = () => {
  const location = useLocation()
  const appCtx = useContext(appContext)
  const { difficulty } = useParams()
  // mini components
  const title =
    location.pathname.includes('easy') || difficulty === 'easy' ? (
      <div className={classes['title-space']}>
        <span>ROCK</span>
        <span>PAPER</span>
        <span>SCISSORS</span>
      </div>
    ) : (
      <div className={classes['title-space']}>
        <span>ROCK</span>
        <span>PAPER</span>
        <span>SCISSORS</span>
        <span>LIZARD</span>
        <span>SPOCK</span>
      </div>
    )

  const scoreboard = (
    <div className={classes['score-space']}>
      <span className={classes['score-text']}>SCORE</span>
      <span className={classes['score']}>{appCtx.score}</span>
    </div>
  )

  return (
    <div className={classes.header}>
      {title}
      {scoreboard}
    </div>
  )
}

export { Header }
