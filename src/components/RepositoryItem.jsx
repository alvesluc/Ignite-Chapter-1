export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository.name ?? "Default"}</strong>
      {props.repository.description ? <p>{props.repository.description}</p> : <p></p>}

      <a href="">{props.repository.html_url}</a>
    </li>
  );
}
