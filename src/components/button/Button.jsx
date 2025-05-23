import './Button.css'

function Button({label}) {
    function revealLabel() {
    alert(`A label desse botão é ${label}`)
}
    return <button className='btn' onClick={revealLabel}>{label}</button>
}

export default Button