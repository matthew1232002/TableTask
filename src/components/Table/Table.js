import React from "react";
import {StyledTable, StyledTd, StyledTh} from "./Table.styled";

const Table = (props) => {

    return (
        <StyledTable>
            <thead>
            <tr>
                <StyledTh onClick={props.onSortHandler.bind(null, 'id')}
                          sortType={props.field === 'id' ? props.sortType : ''}>id</StyledTh>
                <StyledTh onClick={props.onSortHandler.bind(null, 'firstName')}
                          sortType={props.field === 'firstName' ? props.sortType : ''}>Fist name</StyledTh>
                <StyledTh onClick={props.onSortHandler.bind(null, 'lastName')}
                          sortType={props.field === 'lastName' ? props.sortType : ''}>Last name</StyledTh>
                <StyledTh onClick={props.onSortHandler.bind(null, 'email')}
                          sortType={props.field === 'email' ? props.sortType : ''}>Email</StyledTh>
                <StyledTh onClick={props.onSortHandler.bind(null, 'phone')}
                          sortType={props.field === 'phone' ? props.sortType : ''}>Phone</StyledTh>
                <StyledTh onClick={props.onSortHandler.bind(null, 'adress.state')}
                          sortType={props.field === 'adress.state' ? props.sortType : ''}>State</StyledTh>
            </tr>
            </thead>

            <tbody>
            {props.filteredData.map((item) => (
                <tr key={item.id + item.phone} onClick={props.selectedRow.bind(null, item)}>
                    <StyledTd>{item.id}</StyledTd>
                    <StyledTd>{item.firstName}</StyledTd>
                    <StyledTd>{item.lastName}</StyledTd>
                    <StyledTd>{item.email}</StyledTd>
                    <StyledTd>{item.phone}</StyledTd>
                    <StyledTd>{item.adress.state}</StyledTd>
                </tr>
            ))}
            </tbody>
        </StyledTable>
    );
}

export default Table;