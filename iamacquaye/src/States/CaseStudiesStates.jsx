function CSStates(props) {
  return (
    <div className={props.name}>
      <div className="card-container">
        <a href={props.bLink} target="_blank">
          <img
            className="card-img"
            src={props.cardImg}
            alt={`${props.name} design image`}
          />
        </a>
        <div className="hidden-tag">
          <h1>{props.name2}</h1>
          <p>Identity, motion, brand guidelines</p>
        </div>
      </div>
    </div>
  );
}

export default CSStates;
