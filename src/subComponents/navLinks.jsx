export function NavLinks(props) {
  return (
    <a
      href={props.href}
      className="text-gray-600 hover:text-blue-500 active:text-blue-600 transition-colors"
    >
      {props.pageName}
    </a>
  );
}
