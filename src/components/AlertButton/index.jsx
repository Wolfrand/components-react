import './index.css'

function Button({label}) {
    return <button className='btn' onClick={() => alert(`A label desse botão é ${label}`)}>{label}</button>
}

export default Button