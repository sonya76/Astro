import './App.css';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import { Home } from "./Pages/Home";
import { Articles } from "./Pages/Articles";
import { AjouterArticle } from "./Pages/AjouterArticle";
import { Apropos } from "./Pages/Apropos";

function App() {
  return (
    <>
      <Router>
        <NavBar />
          <div className="pages">
          <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/articles" component={Articles} />
                <Route path="/ajouterArticle" component={AjouterArticle} />
                <Route path="/apropos" component={Apropos} />
          </Switch>
            </div>
          <Footer />
      </Router>
    </>
  );
}

export default App;
