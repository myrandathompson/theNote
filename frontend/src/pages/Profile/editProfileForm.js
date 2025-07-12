// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { updateProfile } from '../../actions/users';
// import './ProfilePage.css';


// const editProfileForm = ({ currentUser, setSwitch }) => {
//     const [name, setname] = useState(currentUser?.result?.name)
//     const [about, setAbout] = useState(currentUser?.result?.about)
//     const [tags, setTags] = useState([])
//     const dispatch = useDispatch();

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         if (tags[0] === '' || tags.length === 0) {
//             alert("Please enter at least one tag");
//         } else {
//             dispatch(updateProfile(currentUser?.result?._id, {name, about, tags}))
//         }
//         setSwitch(false);
//     }

//     return (
//         <div>
//             <h1 className="editProfileTitle">Edit Your Profile</h1>
//             <h2 className="editProfileSubtitle">Update your profile information</h2>
//             <form className='editProfileForm' onSubmit={handleSubmit}>
//                 <label htmlFor="name">
//                     <h3>About Me</h3>
//                     <textarea name='' id='about' cols='30' rows='10' value={about} onChange={(e) => setAbout(e.target.value)}></textarea>
//                 </label>
//                 <label htmlFor="tags">
//                     <h3>Watched Tags</h3>
//                     <p>Add tags</p>
//                     <input type="text"
//                     id="tags"
//                     onChange={(e) => setTags(e.target.value.split(" "))}
//                     />
//                 </label>
//                 <br />
//                 <input type="submit" value="save profile" className='userSubmitButton' />
//                 <button type='button' className='userCancelButton' onClick={() => setSwitch(false)}>Cancel</button>
//             </form>
//         </div>
//     )
// }


// export default editProfileForm;