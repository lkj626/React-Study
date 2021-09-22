import React, {useState} from 'react';
//usestate{useEffect, useReducer}
// import axios from 'axios';
// import {useAsync} from 'react-async';
import User from './User'
import { getUsers, useUsersDispatch, useUsersState } from './UsersContext';

// LOADING, SUCCESS, ERROR

// async function getUsers() {
//     const response = await axios.get('https://jsonplaceholder.typicode.com/users');
//     return response.data;
// }

function Users(props) {

    // const [users, setUsers]= useState(null);
    // const [loading, setLoading] =useState(false);
    // const [error, setError] =useState(null);

    // const [state, dispatch] = useReducer(reducer, {
    //     loading: false,
    //     data: null,
    //     error: null
    // });
    // const fetchUsers = async () => {
    //     dispatch({type: 'LOADING'});
    //     try {
    //         // setUsers(null);
    //         // setError(null);
    //         // setLoading(true);

    //         const response = await axios.get(
    //             'https://jsonplaceholder.typicode.com/users'
    //         );
    //         dispatch({type: 'SUCCESS', data: response.data});
    //         // setUsers(response.data);
    //     } catch (e) {
    //         dispatch({type: 'ERROR', error: e})
    //         // console.log(e.response.status);
    //         // setError(e);
    //     }

    //     // setLoading(false);
    // };

    // useEffect(() => {
    //     fetchUsers();
    // }, [] );

    // const [state, refetch] = useAsync(getUsers, [], true);
    const [userId, setUserId]= useState(null);

    const state= useUsersState();
    const dispatch = useUsersDispatch();

    const {loading, data: users, error } = state.users;
    const fetchData = () => {
        getUsers(dispatch);
    }

    // const {data: users, error, isLoading, reload, run} =useAsync({
    //     deferFn: getUsers
    // });
    // const {loading, data: users, error} = state;

    if (loading) return <div>loading...</div>
    if (error) return <div>에러가 발생했습니다.</div>
    if(!users) return <button onClick={fetchData}>불러오기 </button>;

    return (
        <>
        <ul>
            {users.map(user => 
            <li key={user.id} onClick={() => setUserId(user.id)}>
                {user.username} ({user.name})
            </li>)}
        </ul>
        <button onClick={fetchData}>다시 불러오기</button>
        { userId && <User id={userId} /> }
        </>
    );
}

export default Users;