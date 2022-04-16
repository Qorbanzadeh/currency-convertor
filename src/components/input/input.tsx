import { ChangeEvent, FunctionComponent } from 'react'
import './input.styles.css'

type InputTypes = {
  labelText: string
  inputId: string
  value: string
  onChangeHandler: (event: ChangeEvent<HTMLElement>) => void
  isDisabled?: true | false
}

const Input: FunctionComponent<InputTypes> = ({
  labelText,
  inputId,
  value,
  onChangeHandler,
  isDisabled = false,
}) => {
  return (
    <div className="input-container">
      <input
        disabled={isDisabled}
        type="text"
        id={inputId}
        className="form-input"
        autoComplete="off"
        placeholder=" "
        value={value}
        onChange={onChangeHandler}
      />
      <label htmlFor={inputId}>{labelText}</label>
    </div>
  )
}

export default Input
