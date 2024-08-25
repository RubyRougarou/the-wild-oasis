import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles.js";
import Button from "./ui/Button.jsx";
import Heading from "./ui/Heading.jsx";
import Input from "./ui/Input.jsx";
import Row from "./ui/Row.jsx";

function App() {
  return (
    <>
      <GlobalStyles />
      <Row type={"vertical"}>
        <Row type={"horizontal"}>
          <Heading as={"h1"}>The Wild Oasis</Heading>
          <div>
            <Heading as={"h2"}>Check in and out</Heading>
            <Button variation={"primary"} size={"medium"}>
              Check in
            </Button>
            <Button variation={"secondary"} size={"small"}>
              Check out
            </Button>
          </div>
        </Row>
        <Row type={"vertical"}>
          <Heading as={"h3"}>Forms</Heading>
          <from>
            <Input placeholder={"text"} />
            <Input placeholder={"number"} />
          </from>
        </Row>
      </Row>
    </>
  );
}

export default App;
