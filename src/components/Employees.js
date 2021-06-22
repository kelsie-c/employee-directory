import React from "react";

const Employees = (props) => {
    function date(date) {
        let arr = date.slice(0, 10);
        let dateFormat = arr.split("-");
        let newDate = dateFormat[1] + "-" + dateFormat[2] + "-" + dateFormat[0]
        return newDate;
    };

    let dob = date(props.dob);

    return (
        <tr>
            <td>
                <img alt={props.firstName} src={props.icon} />
            </td>

            <td>
                {props.firstName} {props.lastName}
            </td>

            <td>
                {props.email}
            </td>

            <td>
                {props.phone}
            </td>

            <td>
                {dob}
            </td>

            <td>
                {props.address}
            </td>
        </tr>
    );
};

export default Employees;