// images
import { ReactComponent as RockImage } from '../images/icon-rock.svg'
import { ReactComponent as PaperImage } from '../images/icon-paper.svg'
import { ReactComponent as ScissorsImage } from '../images/icon-scissors.svg'
// styles
import classes from './EasySection.module.css'
// page-info
import { useNavigate } from 'react-router-dom'
// framer-motion
import { motion } from 'framer-motion'

const EasySection = () => {
  const navigate = useNavigate()
  const difficulty = 'easy'

  // event handler functions
  function clickHandler(userChoice) {
    const choices = ['rock', 'paper', 'scissors']
    const machineChoice = choices[Math.floor(Math.random() * 3)]
    navigate(`/result/${difficulty}/${userChoice}/${machineChoice}`)
  }

  return (
    <div className={classes['easy-section']}>
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
        </motion.div>{' '}
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
        </motion.div>{' '}
      </div>
    </div>
  )
}

export { EasySection }
