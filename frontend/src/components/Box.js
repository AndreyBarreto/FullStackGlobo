import Card from "@mui/material/Card";
import "../styles/box.scss";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import IconButton from "@mui/material/IconButton";
import EditIcon from '@mui/icons-material/Edit';

const Box = ({ text, tagName, onDeleteButton, onEditButton }) => {


  return (
    <Card classes={{ root: "card-container" }}>
      <div className ="icons-box">
        <IconButton onClick={onEditButton} >
          <EditIcon color="primary" className="edit-icon" />
        </IconButton>
        <IconButton onClick={onDeleteButton}>
          <DeleteOutlineOutlinedIcon color="primary" />
        </IconButton>
      </div>
      <h3>{text}</h3>

      <div className="tag-container">
        {tagName.map((name) => {

          return (
            <div key={name} className="tag-card">
              <span>{name.toUpperCase()}</span>

            </div>
          );
        })}


      </div>
    </Card>
  );
};

export default Box;
