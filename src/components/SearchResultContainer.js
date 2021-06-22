import React, { Component } from "react";
import API from "../utils/API";
import Employees from "./Employees";

class SearchResultContainer extends Component {
    state = {
        search: "",
        employees: [],
        employeesSorted: [],
        sorted: false,
    };

    componentDidMount = () => {
    API.getEmployees()
        .then((res) => { this.setState({ employees: res.data.results }) })
        .catch(err => console.log(err));
    };

    sortEmployees = () => {
        let { employees, search } = this.state;
        let employeesSorted = employees.filter((sorted) => {
            return (
                sorted.name.first.toLowerCase().includes(search.toLowerCase()) ||
                sorted.name.last.toLowerCase().includes(search.toLowerCase()) ||
                sorted.email.toLowerCase().includes(search.toLowerCase())
            );
        });
    };

    sort = (e) => {
        this.setState({ search: e.target.value }, () => {
            this.sortEmployees();
            this.setState({ sorted: true });
        });
    };

    render = () => {
        return (
            <>
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone #</th>
                            <th>Address</th>
                            <th>Date of Birth</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!this.state.sorted
                            ? this.state.employees.map((employee) => (
                                <Employees
                                    key={employee.id.value}
                                    icon={employee.picture.thumbnail}
                                    firstName={employee.name.first}
                                    lastName={employee.name.last}
                                    email={employee.email}
                                    phone={employee.cell}
                                    dob={employee.dob.date}
                                    address={employee.location.street.number + " " + employee.location.street.name + ", " + employee.location.city + ", " + employee.location.state + " " + employee.location.postcode}
                                />
                            ))
                            : this.state.employeesSorted.map((employee) => {
                                <Employees
                                    key={employee.id.value}
                                    icon={employee.picture.thumbnail}
                                    firstName={employee.name.first}
                                    lastName={employee.name.last}
                                    email={employee.email}
                                    phone={employee.cell}
                                    dob={employee.dob.date}
                                    address={employee.location.street.number + " " + employee.location.street.name + ", " + employee.location.city + ", " + employee.location.state + " " + employee.location.postcode}
                                />
                            })
                        }
                    </tbody>
                </table>
            </>
        )
    }
}

export default SearchResultContainer;