import styled from "styled-components";

export const Container = styled.div`


  & > span {
    display: none;
    position: absolute;
  }
  &:hover > span {
    display: unset;
  }
  transition:.4s;
`;

export const Banner = styled.img`

  object-fit: cover;
`;
