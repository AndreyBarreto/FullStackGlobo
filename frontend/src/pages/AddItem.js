import { useState } from "react";
import HeaderSecondary from "../components/HeaderSecondary";
import MultipleSelect from "../components/MultipleSelect";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "../styles/addItem.scss";
import axios from "axios";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

require('dotenv').config()




const AddItem = (props) => {
  const history = useHistory();


  const dataCard = props.history.location.state
  const propsText = dataCard ? dataCard.texto : ""
  const propsList = dataCard ? dataCard.tags : []
  const id = dataCard ? dataCard.id : ""

  const [text, setText] = useState(propsText);
  const [tags, setTags] = useState(propsList);

  const sendData = () => {
    const data = { "texto": text, "tags": tags }
    axios.post(`http://${process.env.REACT_APP_CURRENT_IP}:3333/cards`, data).then(() => {
      Swal.fire(
        'Criado!',
        'Seu Card foi Criado.',
        'success')
      history.push("/");

    }
    )
      .catch((err) => {
        Swal.fire(
          'Erro!',
          `${err.response.data.error}.`,
          'error'
        )
      })
  }
  const updateDate = () => {
    const data = { "texto": text, "tags": tags }
    axios.put(`http://${process.env.REACT_APP_CURRENT_IP}:3333/cards/${id}`, data).then(() => {
      Swal.fire(
        'Atualizado!',
        'Seu Card foi Atualizado.',
        'success')
      history.push("/");
    }
    )
      .catch((err) => {
        Swal.fire(
          'Erro!',
          `${err.response.data.error}.`,
          'error'
        )
      })
  }

  return (
    <div className="addItem-container">
      <HeaderSecondary />
      <Container maxWidth="sm">
        <Card classes={{ root: "card-edit-container" }}>
          <TextField
            id="standard-multiline-static"
            label="INSIGHT"
            multiline
            rows={6}
            placeholder="Escreva seu insight aqui"
            variant="standard"
            fullWidth
            color="primary"
            helperText="limite de caracteres: 200"
            inputProps={{ maxLength: 200 }}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />


          <MultipleSelect tags={tags} setTags={setTags} />
        </Card>
        <Button variant="contained" color="primary" fullWidth onClick={id ? updateDate : sendData}>
          PUBLICAR
        </Button>
      </Container>
    </div >
  );
};

export default AddItem;
