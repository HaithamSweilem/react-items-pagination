const Item = ({ item }) => {
  return <div>
    <p>Name: {item.name}</p>
    <p>Description: {item.description}</p>
    <p>Owner: {item.owner.displayName}</p>
    <hr />
  </div>
}

export default Item
