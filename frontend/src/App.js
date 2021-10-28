import Home from "./pages/Home";
import AddItem from "./pages/AddItem";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#ED4D77",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/add-item" component={AddItem} />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
