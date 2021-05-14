// import logo from "./logo.svg";
import "./App.css";
import MyNav from "./components/MyNav";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles/mainBody1.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfileBody from "./components/ProfileBody";
import HomePage from "./components/HomePage";
import PostSection from "./components/PostSection";

function App() {
  return (
    <div>
      <Router>
        <MyNav />

        <Route
          render={(routerProps) => <ProfileBody {...routerProps} />}
          path="/"
          exact
        />
        <Route component={HomePage} path="/feed" exact />
        <Footer />
        <PostSection />
      </Router>
    </div>
  );
}

export default App;
