import React from 'react'
import queryString from 'query-string'

function About({location, match}) {
    const query = queryString.parse(location.search);
    const detail = query.detail === 'true'; //querystring은 다 string임
    return (
        <div>
            <h2>About {match.params.name}</h2>
            {detail && 'detail: blahblah'}
        </div>
    )
}

export default About
