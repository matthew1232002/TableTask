import Layout from "./components/Layout/Layout";
import {Fragment, useEffect, useState} from "react";
import Loader from "./components/Loader/Loader";
import Table from "./components/Table/Table";
import _ from 'lodash';
import RowDescription from "./components/RowDescription";
import SearchForm from "./components/Table/SearchForm";
import SearchSelector from "./components/Table/SearchSelector";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

function App() {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [sortType, setSortType] = useState();
    const [field, setFiled] = useState('id');
    const [row, setRow] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [stateAddress, setStateAddress] = useState(null);

    useEffect(() => {
        setIsLoading(false)
        async function fetchData() {
            const response = await fetch(`https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/react-test-api.json`);
            const loadedData = await response.json();
            const sortedData = _.orderBy(loadedData, 'id', 'asc');
            setSortType('desc')
            setData(sortedData);
            setFilteredData(sortedData)
        }
        fetchData();
        setIsLoading(true)

    }, [])

    const onSearchHandler = (text) => {
        setSearchText(text);
        manageFilters(stateAddress, text);
    }

    const filterByState = (state) => {
        setStateAddress(state);
        manageFilters(state);
    }

    const onSortHandler = (activeField) => {
        if (activeField !== field) {
            setSortType('asc');
        } else {
            setSortType(prevType => prevType === 'asc' ? 'desc' : 'asc');
        }
        const copyData = data.concat();

        const sortedData = _.orderBy(copyData, activeField, sortType);
        setFilteredData(sortedData);
        setFiled(activeField);
    }

    const manageFilters = (state = stateAddress, text = searchText) => {
        if (!state && !text) {
            setFilteredData(data);
        }
        else if (text && state) {
            console.log(text, state)
            setFilteredData(data.filter(item => {
                return item.adress.state === state && item.firstName.toLowerCase().includes(text.toLowerCase());
            }))
        }
        else if (text && !state) {
            setFilteredData(data.filter(item => {
                return item.firstName.toLowerCase().includes(text.toLowerCase());
            }))
        }
        else if (!text && state) {
            setFilteredData(data.filter(item => {
                return item.adress.state === state;
            }))
        }
    }


    const selectedRow = (rowData) => {
        setRow(rowData)
    }

    return (
        <Fragment>
            {!isLoading && <Loader/>}
            {isLoading &&
            <Layout>
                <StyledWrapper>
                    <SearchForm onSearchHandler={onSearchHandler}/>
                    <SearchSelector onSelectState={filterByState}/>
                </StyledWrapper>
                <Table data={data}
                       filteredData={filteredData}
                       onSortHandler={onSortHandler}
                       field={field}
                       sortType={sortType}
                       selectedRow={selectedRow}
                />
                {row && <RowDescription data={row}/>}
            </Layout>
            }

        </Fragment>
    );
}

export default App;
