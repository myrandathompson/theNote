import React from 'react'

function WidgetTag() {
    const tags = [
        "c",
        "css",
        "express",
        "firebase",
        "html",
        "java",
        "javascript",
        "mern",
        "mongodb",
        "mysql",
        "next.js",
        "node.js",
        "php",
        "python",
        "reactjs",
    ]
    return (
    <div className="widgetTags">
        <h4>Watched tags</h4>
        <div className="widgetagsDiv">
            {tags.map((tag)=>(
                <p key={tag}>{tag}</p>
            ))}
        </div>
    </div>
  )
}

export default WidgetTag