import {useState} from "react";
import FilterFreeText from "./FilterFreeText";
import FilterUser from "./FilterUser";

const Filters = ({ users, onFilter }) => {

  const initialUser = users.length > 0 ? users[0] : ""

  const [fields, setFields] = useState({
    freeText: "",
    user: initialUser
  })

  const updateFilter = (newFields) => {
    // update input
    setFields(newFields)
    // lift state change up
    onFilter(newFields)
  }

  return (<>

    <FilterFreeText fields={fields} onFilterChanged={updateFilter} />
    <br />
    <FilterUser users={users} fields={fields} onFilterChanged={updateFilter} />
    <br />

  </>)
}

export default Filters
