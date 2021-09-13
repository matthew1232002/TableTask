import styled from 'styled-components';

export const StyledTable = styled.table`
  border-collapse: collapse;
  width: auto;
  margin: 10px auto;
`;
export const StyledTh = styled.th`
  border: 1px solid black;
  text-align: center;
  background: #fc0;
  vertical-align: bottom;
  padding: 22px;
  position: relative;
  
  &::after{
    content: '';
    position: absolute;
    border: 7px solid transparent;
    border-top: ${(props) => (props.sortType === 'asc' ? '7px solid black' : '')};
    border-bottom: ${(props) => (props.sortType === 'desc' ? '7px solid black' : '')};
    margin: 0px 0 0 5px;
    top: ${(props) => (props.sortType === 'desc' ? '22px' : '30px')};
  }
`;
export const StyledTd = styled.td`
  border: 1px solid black;
  text-align: center;
  padding: 4px;
`;

export const StyledPaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledPaginationBtn = styled.button`
  height: 30px;
  border: none;
  background: #fc0;
  cursor: pointer;
  margin: 16px 0 0 0;
`;
