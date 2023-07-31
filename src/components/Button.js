import PropTypes from 'prop-types';
import style from './button.module.css'
function Button (props) {
    const { click, name, color } = props;
    return(
        <div>
            <button className={style.button} onClick={click} style={{color:color}} >{name}</button>
        </div>
    )
}

Button.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    color: PropTypes.string
}
export default Button