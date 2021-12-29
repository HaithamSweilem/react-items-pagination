import PropTypes from "prop-types";
import Page from "./Page";

const Pagination = ({ items, itemsPerPage, currentPage, onPageClicked }) => {

  const getNumOfPages = () => {
    const perfectNumOfPages = items.length / itemsPerPage
    return (items.length % itemsPerPage === 0 ? perfectNumOfPages : perfectNumOfPages + 1)
  }


  const getPaginationNumbers = () => {
    let pages = []
    const numOfPages = getNumOfPages()

    // if one page, do not build pagination numbers
    if (numOfPages < 2) {
      return <></>
    }

    for (let i = 1; i <= numOfPages; i++) {
      let item = <Page
          key={i}
          number={i}
          pageClicked={(page) => onPageClicked(page)}
          isCurrent={currentPage === i}
        />
      pages = [...pages, item]
    }

    return <>{pages}</>
  }

  return (getPaginationNumbers())
}

Pagination.propTypes = {
  items: PropTypes.array
}

export default Pagination
