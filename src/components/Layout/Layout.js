import React from 'react';
import styled from "styled-components";

const StyledLayout = styled.div`
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  background-color: beige;
`;

const Layout = (props) => {
    return (
        <StyledLayout>{props.children}</StyledLayout>
    );
}

export default Layout;