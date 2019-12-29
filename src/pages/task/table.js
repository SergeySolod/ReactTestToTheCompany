import React from 'react'

const Table = (props) => {
    return (
        <table className="table">
            <thead>
            <tr>
                <th
                    onClick={props.onSort.bind(null, 'id')}
                >
                    ID {props.sortField === 'id' ? <small>{props.sortType}</small> : null}
                </th>
                <th onClick={props.onSort.bind(null, 'firstName')}>
                    First Name {props.sortField === 'firstName' ? <small>{props.sortType}</small> : null}
                </th>
                <th onClick={props.onSort.bind(null, 'lastName')}>Last Name {props.sortField === 'lastName' ? <small>{props.sortType}</small> : null}</th>
                <th onClick={props.onSort.bind(null, 'email')}>Email {props.sortField === 'email' ? <small>{props.sortType}</small> : null}</th>
                <th onClick={props.onSort.bind(null, 'phone')}>Phone {props.sortField === 'phone' ? <small>{props.sortType}</small> : null}</th>
            </tr>
            </thead>
            <tbody>
            {props.data.map(item => (
                <tr key={item.id + item.firstName} onClick={props.onRowSelect.bind(null,item)}
                >
                    <td>{item.id}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default Table