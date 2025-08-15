import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import DisplayContainer from "./components/DisplayContainer";
import Container from "./components/Container";
import Controls from "./components/Controls";
import { useSelector } from "react-redux";
import PrivacyMessage from "./components/PrivacyMessage";

function App() {
  const privacyHere = useSelector((store) => store.privacyToggle);
  return (
    <>
      <center className="px-4 py-5 my-5 text-center">
        <Container>
          <Header />
          <div className="col-lg-6 mx-auto">
            {privacyHere ? <PrivacyMessage /> : <DisplayContainer />}
            <Controls />
          </div>
        </Container>
      </center>
    </>
  );
}

export default App;
