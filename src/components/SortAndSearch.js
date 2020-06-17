import React, { useState } from "react";
// import PropTypes from "prop-types";
import {
  Badge,
  Button,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  InputGroup,
  InputGroupAddon,
  Row,
} from "reactstrap";
import { Data } from "../data/DataDropdown";
import { searchTodosList } from "../actions/actions";
import { useDispatch } from "react-redux";

function SortAndSearch() {
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState("");
  const [dropdownValue, setDropdownValue] = useState("Level ASC");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // set dropdown open
  const toggle = () => {
    setDropdownOpen(!dropdownOpen);
  };
  // get dropdown item
  const handleChangeDropdown = (item) => {
    console.log(item);
    setDropdownValue(item);
  };
  //
  const handleSearch = (e) => {
    let value = e.target.value;
    setSearchValue(value);

    const action = searchTodosList(value);
    dispatch(action);
  };

  const cancerSearch = () => {
    setSearchValue("");
    const action = searchTodosList("");
    dispatch(action);
  };
  return (
    <Col sm={12} lg={6}>
      <Row>
        {/* <!-- SORT : START --> */}
        <Col sm={12}>
          <Dropdown
            isOpen={dropdownOpen}
            toggle={toggle}
            className="d-inline-block mr-3 mb-3"
          >
            <DropdownToggle caret>Sort By</DropdownToggle>
            <DropdownMenu>
              {Data.map((item, index) => (
                <DropdownItem
                  key={index}
                  onClick={() => handleChangeDropdown(item)}
                >
                  {item}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
          <Badge color="primary">{dropdownValue}</Badge>
        </Col>
        {/* <!-- SORT : END --> */}

        {/* <!-- SEARCH : START --> */}
        <Col sm={12} className="mb-3">
          <InputGroup>
            <Input
              type="text"
              placeholder="Search for..."
              value={searchValue}
              onChange={handleSearch}
            />
            <InputGroupAddon addonType="append">
              <Button color="info" onClick={cancerSearch}>
                Clear
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </Col>
        {/* <!-- SEARCH : END --> */}
      </Row>
    </Col>
  );
}

// SortAndSearch.propTypes = {};

export default SortAndSearch;
