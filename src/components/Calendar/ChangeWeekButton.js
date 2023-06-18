import s from './Calendar.module.scss'
import arrowLeft from '../../assets/arrow-left.png'
import arrowRight from '../../assets/arrow-right.png'

const ChangeWeekButton = ({changeWeekHandle, type}) => {
    return <div className={type === 'prev' ? s.btn_left
                          : type === 'next' ? s.btn_right : s.btn}
              onClick={() => changeWeekHandle(type)}>
        {type === 'prev' ?  <img src={arrowLeft} alt='Prev week'></img> : <img src={arrowRight} alt='Next week'></img>}
  </div>
}

export default ChangeWeekButton