import styled from "styled-components";
import Header from "../page/header";
import { Outlet } from "react-router-dom";
import { Chat } from "./chat";

export const Layout = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Chat />
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const Content = styled.div`
  flex: 1;
  overflow-y: auto;
`;
