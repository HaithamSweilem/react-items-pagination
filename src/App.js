import { mockData } from "./data/mockData";
import {ItemsList} from "./components/ItemsList";
import Pagination from "./components/Pagination";
import {useState} from "react";
import Filters from "./components/Filters";

export default function App() {

  const [currentPage, setCurrentPage] = useState(1)
  const [items, setItems] = useState(mockData)

  /** number of items per page */
  const itemsPerPage = 4
  /** unique array of user names */
  const users = [...new Set(mockData.map((user) => user.owner.displayName))]

  /** A Page in the pagination has been clicked */
  const onPageClicked = (page) => {
    setCurrentPage(page)
  }

  /** Handle changes in input filters */
  const onFilter = ( fields ) => {
    // initialize result
    let data = mockData
    // assume filters are empty
    let noFilters = true

    for (let field in fields) {

      if (fields[field] && fields[field].trim().length <= 0) {
        continue
      }

      // filter by 'freeText'
      if (field === 'freeText') {

        noFilters = false
        const freeText = fields[field]

        data = data.filter((item) => {
          return (
            // check item name
            item.name.indexOf(freeText) !== -1 ||
            // check item description
            item.description.indexOf(freeText) !== -1 ||
            // check item tags
            item.tags.filter((tag) => tag.indexOf(freeText) !== -1).length > 0
          )
        })

      }

      // filter by 'user'
      if (field === 'user' && fields[field] !== 'Select user...') {
        noFilters = false
        const user = fields[field]

        data = data.filter((item) => {
          return item.owner.displayName.indexOf(user) !== -1
        })

      }
    }

    // reset/update items
    setItems(noFilters ? mockData : data)
    // reset page to 1
    setCurrentPage(1)
  }

  return (
    <div className="App">
      <h1>Items List</h1>

      <Filters users={users} onFilter={onFilter}/>

      <hr />
      <Pagination items={items} itemsPerPage={itemsPerPage} currentPage={currentPage} onPageClicked={onPageClicked}/>
      <hr />

      <ItemsList items={items} itemsPerPage={itemsPerPage} currentPage={currentPage} />

      <Pagination items={items} itemsPerPage={itemsPerPage} currentPage={currentPage} onPageClicked={onPageClicked}/>
    </div>
  );
}
