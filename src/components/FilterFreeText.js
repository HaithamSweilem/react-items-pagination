import {useState} from "react";

const FilterFreeText = ({ fields, onFilterChanged }) => {

  const [freeText, setFreeText] = useState("")

  const freeTextChanged = (event) => {
    const value = event.target.value

    // update input
    setFreeText(value)
    // lift state change up
    onFilterChanged({...fields, freeText: value})
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
