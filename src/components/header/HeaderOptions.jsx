const HeaderOptions = ({ isNavHeaderOpen, setIsNavHeaderOpen }) => {
  return (
    <div>
      <input type="checkbox">Close header on click outside of header</input>
      <input type="checkbox">Close header on scroll</input>
    </div>
  );
};
export default HeaderOptions;
