import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { setUsers } from '../../redux/actions';
import UsersWrapper from './UsersWrapper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const Users = () => {
    const users = useSelector(state => state.users)

    const dispatch = useDispatch()

    useEffect(() => {
        setUsers(dispatch);
    }, [])

    return (
        <UsersWrapper className="p-5">
            <h1>Users Info</h1>
            <table className="w-100">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Adress</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => {
                        return <tr key={user.id}>
                            <td>{index + 1}</td>
                            <td>
                                <div className="d-flex align-items-center">
                                    <img src="https://i.pinimg.com/474x/32/05/c9/3205c9de14589ed761b1d11b0e6403c7.jpg" alt="?" className="av" />
                                    <div style={{ flex: "1" }}>
                                        <h6 className="m-0 fw-bold">{user.name}</h6>
                                        <p className="m-0">@{user.username}</p>
                                    </div>
                                </div>

                            </td>
                            <td>{user.email}</td>
                            <td>{user.address.city + ` , ` + user.address.street}</td>
                            <td>{user.phone}</td>
                            <td>
                                <button className="btn"><FontAwesomeIcon icon={faTrash} /></button>
                                <button className="btn"><FontAwesomeIcon icon={faEdit} /></button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </UsersWrapper >
    )
}

export default Users;
