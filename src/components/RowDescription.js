import React from "react";
import Layout from "./Layout/Layout";
import styled from "styled-components";

const StyledDiv = styled.div`
  text-align: center;
  padding: 0 0 15px 0;
`;

const RowDescription = ({data}) => {
    return (
        <Layout>
            <StyledDiv>Profile info: </StyledDiv>
            <StyledDiv>Selected profile: {data.firstName + ' ' + data.lastName}</StyledDiv>
            <StyledDiv>Description: {data.description}</StyledDiv>
            <StyledDiv>Adress: {data.adress.streetAddress}</StyledDiv>
            <StyledDiv>City: {data.adress.city}</StyledDiv>
            <StyledDiv>State: {data.adress.state}</StyledDiv>
            <StyledDiv>Index: {data.adress.zip}</StyledDiv>
        </Layout>
    );
}

export default RowDescription;