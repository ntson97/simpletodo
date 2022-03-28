const Action = ({ name, action, className }) => {
  return (
    <a className={`action ${className}`} onClick={action}>
      {name}
    </a>
  );
};

export default Action;
