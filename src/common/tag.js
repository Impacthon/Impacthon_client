import styled from "styled-components";

export const Tag = ({ tag }) => {
  return <Container>#{tag}</Container>;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 7px 9px;
  border-radius: 8px;
  color: #0a40de;
  background-color: #e7eaf4;
  width: fit-content;
`;
