import styled from "styled-components";
import Header from "../page/header";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Outlet />
      </Content>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

const Content = styled.div`
  width: 90%;
`;
