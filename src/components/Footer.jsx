const react = require("react");

function Footer() {
  const currYear = new Date().getFullYear();
  return (
    <footer>
      <h1>Copyright @{currYear}</h1>
    </footer>
  );
}
export default Footer;
