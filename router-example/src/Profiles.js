import React from 'react';
import Profile from './Profile';
import {Link, Route} from 'react-router-dom';

function Profiles(props) {
    return (
        <div>
            <h3>유저 목록</h3>
            <ul>
                <li><Link to="/profiles/lkj">lkj</Link></li>
                <li><Link to="/profiles/homer">homer</Link></li>
            </ul>

            <Route path="/profiles" exact render={ () => <div>사용자를 선택해주세요.</div>} />
            <Route path="/profiles/:username" component={Profile} />
        </div>
    );
}

export default Profiles;