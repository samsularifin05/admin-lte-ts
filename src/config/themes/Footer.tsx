import { Link } from "react-router-dom";
const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <footer className="main-footer">
      <div className="float-right d-none d-sm-block">
        <b>Version</b> 0.1
      </div>
      <strong>
        Copyright &copy; {year}{" "}
        <Link to="#" >Wala Tech</Link>.
      </strong>{" "}
      All rights reserved.
    </footer>
  );
};

export default Footer;
