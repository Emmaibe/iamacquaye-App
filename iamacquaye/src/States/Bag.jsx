function Bag(props) {
  const container = {
    maxWidth: "1295px",
    margin: "auto",
    padding: "0 1rem",
  };
  return <div style={container}>{props.children}</div>;
}

export default Bag;
