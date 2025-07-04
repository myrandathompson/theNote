import React from 'react';


const profileBio = ({currentProfile}) => {
    return (
        <div>
            <div>
                {currentProfile?.tags.length !==0? (
                    <>
                    <h4>Tags Watching</h4>
                    {currentProfile?.tags.map((tag) => (
                        <p key={tag}>{tag}</p>
                    ))}
                    </>
                ): (
                    <p> 0 Tags watched</p>
                   )}
            </div>
            <div>{currentProfile?.about ? (
                <>
                <h4>About</h4>
                <p>{currentProfile?.about}</p>
                </>
            ) : (
                <p>No Bio Found</p>
            )}</div>
        </div>
    )
}

export default profileBio;