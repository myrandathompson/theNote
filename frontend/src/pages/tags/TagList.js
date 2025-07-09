import React from 'react';

const TagList = ({tag}) => {
    return (
        <div className='tag'>
            <h5>{tag.tagName}</h5>
            <p>{tag.tagDescription}</p>
        </div>
    )
}



export default TagList;