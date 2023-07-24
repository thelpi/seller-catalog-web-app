export default function withinRow(Component) {
  // eslint-disable-next-line react/prop-types
  const EnhancedComponent = ({ row }) => <Component {...row} />;

  return EnhancedComponent;
}
