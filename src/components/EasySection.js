// images
import { ReactComponent as RockImage } from '../images/icon-rock.svg'
import { ReactComponent as PaperImage } from '../images/icon-paper.svg'
import { ReactComponent as ScissorsImage } from '../images/icon-scissors.svg'
// styles
import classes from './EasySection.module.css'
// page-info
import { useNavigate } from 'react-router-dom'

const EasySection = () => {
  const navigate = useNavigate()
  const difficulty = 'easy'

  // event handler functions
  function clickHandler(choice) {
    navigate(`/result/${difficulty}/${choice}`)
  }

  return (
    <div className={classes['easy-section']}>
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
    </div>
  )
}

export { EasySection }
