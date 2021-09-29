import React from 'react';
import qs from 'qs';

function About({location}) {    
    console.log(location);
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true
    })
    const detail = query.detail === 'true';



    console.log(query);

    return (
        <div>
            <h1>소개</h1>
            <p>이 프로젝트는 리액트 라우터기초 실습 예제</p>
            {detail && <p> detail값 true</p>}
        </div>
    );
}

export default About;