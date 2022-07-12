// images
import { ReactComponent as RockImage } from '../images/icon-rock.svg'
import { ReactComponent as PaperImage } from '../images/icon-paper.svg'
import { ReactComponent as ScissorsImage } from '../images/icon-scissors.svg'
import { ReactComponent as SpockImage } from '../images/icon-spock.svg'
import { ReactComponent as LizardImage } from '../images/icon-lizard.svg'
// styles
import classes from './HardSection.module.css'
// page-info
import { useNavigate } from 'react-router-dom'
// framer-motion
import { motion } from 'framer-motion'

const HardSection = () => {
  const navigate = useNavigate()
  const difficulty = 'hard'

  // event handler functions
  function clickHandler(userChoice) {
    const choices = ['rock', 'paper', 'scissors', 'spock', 'lizard']
    choices.splice(choices.indexOf(userChoice), 1)
    const machineChoice = choices[Math.floor(Math.random() * 4)]
    navigate(`/result/${difficulty}/${userChoice}/${machineChoice}`)
  }
  return (
    <div className={classes['hard-section']}>
      <div className={classes['img-space'] + ' ' + classes['paper-img-space']}>
        <motion.div
          onClick={() => {
            clickHandler('paper')
          }}
          whileTap={{
            scale: 0.8,
          }}
        >
          <PaperImage />
        </motion.div>
      </div>
      <div
        className={classes['img-space'] + ' ' + classes['scissors-img-space']}
      >
        <motion.div
          onClick={() => {
            clickHandler('scissors')
          }}
          whileTap={{
            scale: 0.8,
          }}
        >
          <ScissorsImage />
        </motion.div>
      </div>
      <div className={classes['img-space'] + ' ' + classes['rock-img-space']}>
        <motion.div
          onClick={() => {
            clickHandler('rock')
          }}
          whileTap={{
            scale: 0.8,
          }}
        >
          <RockImage />
        </motion.div>
      </div>
      <div className={classes['img-space'] + ' ' + classes['lizard-img-space']}>
        <motion.div
          onClick={() => {
            clickHandler('lizard')
          }}
          whileTap={{
            scale: 0.8,
          }}
        >
          <LizardImage />
        </motion.div>
      </div>
      <div className={classes['img-space'] + ' ' + classes['spock-img-space']}>
        <motion.div
          onClick={() => {
            clickHandler('spock')
          }}
          whileTap={{
            scale: 0.8,
          }}
        >
          <SpockImage />
        </motion.div>
      </div>
    </div>
  )
}

export { HardSection }
