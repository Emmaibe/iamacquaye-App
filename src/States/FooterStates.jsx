export default function FooterStates(props) {
  return (
    <li>
      <a href={props.link} target="_blank">
        {props.linkName}
      </a>
    </li>
  );
}
