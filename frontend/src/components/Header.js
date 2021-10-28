import Avatar from "@mui/material/Avatar";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import eu from "../assets/eu.jpg";
import logo from "../assets/brand-insights.svg";
import { scrollFunction } from "../utils/functions";
import "../styles/header.scss";

const Header = () => {
  window.onscroll = () => {
    scrollFunction("text-content");
  };

  return (
    <div className="header-container">
      <div className="header-content">
        <div className="img-content">
          <img src={logo} alt="" className="logo-img" />
          <Avatar
            alt="Andrey Barreto"
            src={eu}
            sx={{ width: 56, height: 56 }}
          />
          <Link to="/add-item">
            <IconButton>
              <AddIcon color="primary" fontSize="medium" />
            </IconButton>
          </Link>
        </div>
        <div id="text-content">
          <h1>Olá, Andrey!</h1>
          <span>andrey@gmail.com</span>
          <hr />
          <h2>
            Feed de <b>Insights</b>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
