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

const HardSection = () => {
  const navigate = useNavigate()
  const difficulty = 'hard'

  // event handler functions
  function clickHandler(choice) {
    navigate(`/result/${difficulty}/${choice}`)
  }
  return (
    <div className={classes['hard-section']}>
      <div
        onClick={() => {
          clickHandler('paper')
        }}
        className={classes['img-space'] + ' ' + classes['paper-img-space']}
      >
        <PaperImage />
      </div>
      <div
        onClick={() => {
          clickHandler('scissors')
        }}
        className={classes['img-space'] + ' ' + classes['scissors-img-space']}
      >
        <ScissorsImage />
      </div>
      <div
        onClick={() => {
          clickHandler('rock')
        }}
        className={classes['img-space'] + ' ' + classes['rock-img-space']}
      >
        <RockImage />
      </div>
      <div
        onClick={() => {
          clickHandler('lizard')
        }}
        className={classes['img-space'] + ' ' + classes['lizard-img-space']}
      >
        <LizardImage />
      </div>
      <div
        onClick={() => {
          clickHandler('spock')
        }}
        className={classes['img-space'] + ' ' + classes['spock-img-space']}
      >
        <SpockImage />
      </div>
    </div>
  )
}

export { HardSection }
