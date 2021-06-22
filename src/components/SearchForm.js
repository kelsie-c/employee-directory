import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={(e) => props.sort(e)}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search For an Employee"
        />
        {/* <br />
        <button onClick={props.handleFormSubmit} className="btn btn-primary">
          Search
        </button> */}
      </div>
    </form>
  );
}

export default SearchForm;