import { useState } from "react";

const FilterUser = ({ users, onFilterChanged }) => {

  const [user, setUser] = useState("Select user...")

  const userChanged = (event) => {
    const name = event.currentTarget.name
    const value = event.currentTarget.value

    // update input
    setUser(value)
    // lift state change up
    onFilterChanged({[name]: value})
  }

  return (
    <div>
      <label>User: </label>
      <select
        id="user"
        name="user"
        value={user}
        onSelect={userChanged}
        onChange={userChanged}
      >
        <option key="-1">Select user...</option>
        {
          users.map((user) => {
            return <option key={user}>{user}</option>
          })
        }
      </select>
    </div>
  )
}

export default FilterUser
