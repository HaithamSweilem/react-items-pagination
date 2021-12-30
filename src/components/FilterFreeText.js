import {useState} from "react";

const FilterFreeText = ({ onFilterChanged }) => {

  const [freeText, setFreeText] = useState("")

  const freeTextChanged = (event) => {
    const name = event.target.name
    const value = event.target.value

    // update input
    setFreeText(value)
    // lift state change up
    onFilterChanged({[name]: value})
  }

  return (
    <div>
      <label>Free text: </label>
      <input
        id="free-text"
        name="freeText"
        value={freeText}
        placeholder="Please start typing..."
        onChange={freeTextChanged}
      />
    </div>
  )
}

export default FilterFreeText
