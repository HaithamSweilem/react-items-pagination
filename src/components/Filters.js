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
    const allFields = {...fields, ...newFields}
    // update input
    setFields(allFields)
    // lift state change up
    onFilter(allFields)
  }

  return (<>

    <FilterFreeText onFilterChanged={updateFilter} />
    <br />
    <FilterUser users={users} onFilterChanged={updateFilter} />
    <br />

  </>)
}

export default Filters
