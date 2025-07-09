import React from "react";
import LeftSideBar from "../buttons/sideBar/LeftSideBar";
import TagList from "./TagList";
import {tagsList} from "./TagsList";
import './Tags.css';

const Tags = ({slidein}) => {
    return ( 
        <div className='homeContainer1'>
            <LeftSideBar slidein={slidein} />
            <div className='homeContainer2'>
                <h1 className="tags1">
                    Tags
                </h1>
                <p className='tagsP'>A tag is a keyword or label that relates to the question</p>
                <p className="tagsP">
                    Using the correct tag helps others find your question quickly and easily.
                </p>
                <div className='tagsListContainer'>
                    {tagsList.map((tag,index) => (
                        <TagList tag={tag} key={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}


export default Tags;