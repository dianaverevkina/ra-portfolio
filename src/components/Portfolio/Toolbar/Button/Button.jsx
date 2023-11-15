import './button.css'

export const Button = ({ name, selected, handleSelectFilter }) => {
  return (
    <button 
      type='button'
      className={`filters__btn ${selected === name ? 'filters__btn_selected' : ''}`}
      onClick={handleSelectFilter}
    >
      {name}
    </button>
  )
}
