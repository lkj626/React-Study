import React, {useEffect} from 'react';
import { getUser, useUsersDispatch, useUsersState } from './UsersContext';
// import axios from 'axios';
// import {useAsync} from 'react-async';

// async function getUser({id}) {
//     const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
//     return response.data;
// }

function User({id}) {
    // const {
    //     data : user,
    //     error,
    //     isLoading
    // } = useAsync({
    //     promiseFn: getUser,
    //     id,
    //     watch: id
    // });
    // const [state] =useAsync(()=> getUser(id), [id]);
    // const {loading, data: user, error}= state;

    const state = useUsersState();
    const dispatch = useUsersDispatch();
    
    useEffect(() => {
        getUser(dispatch, id);
    }, [dispatch, id]);

    const {loading, data: user, error }= state.user;

    if (loading) return <div>loading...</div>
    if (error) return <div>에러가 발생했습니다.</div>
    if(!user) return null;

    return (
        <div>
            <h2>{user.username}</h2>
            <p>
                <b>Email : </b> {user.email}
            </p>
        </div>
    );
}


export default User;