import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";

import "../styles/headerSecondary.scss";

const HeaderSecondary = () => {
  return (
    <div className="header-secondary-container">
      <Link to="/">
        <IconButton>
          <ArrowBackIcon color="primary" />
        </IconButton>
      </Link>
      <div className="text-content">
        <h2>
          CRIAR <b>INSIGHT</b>
        </h2>
      </div>
    </div>
  );
};

export default HeaderSecondary;
