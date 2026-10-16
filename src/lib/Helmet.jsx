// React 19 hoists <link>, <meta> and <title> into <head> on its own,
// so this replaces react-helmet by rendering its children in place.
export function Helmet({ children }) {
  return <>{children}</>;
}
