import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Button = (props) => {
  return (
    <Link href={props.link}>
      <StyledLink>{props.children}</StyledLink>
    </Link>
  );
};

export default Button;

const StyledLink = styled.a`
  padding: 0.5rem 1rem;
  background: blue;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
`;
