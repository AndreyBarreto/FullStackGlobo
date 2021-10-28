import { useState, useEffect } from "react";
import Header from "../components/Header";
import Box from "../components/Box";
import SearchBox from "../components/SearchBox";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import "../styles/home.scss";
import axios from "axios";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";




const Home = () => {
  const history = useHistory();

  const [inputValue, setInputValue] = useState("");
  const [cards, setCards] = useState([])
  const [updateCards, setupdateCards] = useState("")


  useEffect(async () => {
    const { data } = await axios.get("http://localhost:3333/cards")
    setCards(data)
  }, [updateCards])

  useEffect(async () => {
    if (inputValue) {
      axios.get(`http://localhost:3333/cards/${inputValue}/tags`).then(({ data }) => {
        setCards(data)
      })
        .catch(() => {
          setCards([])

        })
    }
    else {
      setupdateCards(cards)
    }
  }, [inputValue])

  const deleteCard = async (id) => {
    Swal.fire({
      title: 'Delete card',
      text: "Essa ação é irreversível",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim,deletar'
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3333/cards/${id}`).then((response) => {
          setupdateCards(cards)
          setInputValue("")

          Swal.fire(
            'Deletado!',
            'Seu Card foi deletado.',
            'success'
          )
        })
          .catch((err) => {
            Swal.fire(
              'Problema!',
              'Seu Card não foi deletado.',
              'failed'
            )
          })
      }
    })
  }

  const editCard = (id, tags, texto) => {
    history.push({
      "pathname": "/add-item",
      "state": {
        "texto": texto,
        "id": id,
        "tags": tags
      }
    });
  }

  return (
    <Container maxWidth="md" disableGutters>
      <div className="home-container">
        <Header />
        <Grid
          container
          spacing={1}
          justifyContent="center"
          classes={{ container: "grid-container-box" }}
        >
          {cards.map(({ id, tags, texto }) => {
            return (
              <Grid key={id} item sm={6}>
                <Box text={texto} tagName={tags} onDeleteButton={() => { deleteCard(id) }} onEditButton={() => { editCard(id, tags, texto) }} />
              </Grid>
            );
          })}
        </Grid>
        <Grid
          container
          spacing={1}
          justifyContent="center"
          classes={{ container: "grid-container-search-box" }}
        >
          <Grid item sm={6} xs={12}>
            <SearchBox
              placeholder="Pesquise pelas tags"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default Home;
