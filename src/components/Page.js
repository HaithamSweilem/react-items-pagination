const Page = ({ number, pageClicked, isCurrent = false}) => {

  return (<>
    <span
      onClick={() => pageClicked(number)}
      style={{
        textDecoration: isCurrent ? "" : "underline",
        fontWeight: isCurrent ? "bold" : "normal",
        cursor: "pointer",
        color: isCurrent ? "black" : "blue"
      }}>
      {number}
    </span> </>)

}
export default Page
