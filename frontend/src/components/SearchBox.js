import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const SearchBox = ({ placeholder, value, onChange }) => {
  return (
    <Paper
      //component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        height: 40,
      }}
    >
      <InputBase
        sx={{
          ml: 1,
          flex: 1,
          fontSize: 14,
          fontWeight: "400",
          fontStyle: "italic",
        }}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <SearchIcon />
    </Paper>
  );
};

export default SearchBox;
