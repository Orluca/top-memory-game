import styled from "styled-components";

const MemoryCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-self: center;
  background-color: #424242;
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid transparent;
  height: 100%;

  &:hover {
    border: 1px solid white;
    cursor: pointer;
  }

  img {
    width: 250px;
  }

  .picture-label {
    text-align: center;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default MemoryCardStyled;
