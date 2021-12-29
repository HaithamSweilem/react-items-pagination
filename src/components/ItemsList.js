import Item from "./Item";

export const ItemsList = ({ items, currentPage, itemsPerPage }) => {

  const indexFrom = itemsPerPage * (currentPage - 1)
  const indexTo = Math.min(indexFrom + itemsPerPage, items.length)

  return <>{
    items.slice(indexFrom, indexTo).map((item) => <Item key={item.id} item={item}/>)
  }</>
};
