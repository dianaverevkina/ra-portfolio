import { Button } from "./Button/Button"
import './toolbar.css';

export const Toolbar = ({filters , selected, onSelectFilter}) => {
  return (
    <div className="toolbar">
      <div className="filters">
        {filters.map((filter, index) => {
          return <Button 
            key={index} 
            name={filter} 
            selected={selected}
            handleSelectFilter={onSelectFilter}
          />
        })}
      </div>
    </div>
  )
}
