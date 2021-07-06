import React , {useState} from 'react'
import "./MessageSender.css";
import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import db from './firebase';
import firebase from 'firebase';
import { useStateValue } from './StateProvider';
function MessageSender() {
	 const [{user},dispatch] = useStateValue();
         const [input,setInput] = useState('');
         const [imageUrl, setImageUrl] = useState('');
           const handleSubmit = e =>{
		   e.preventDefault();

		   db.collection('posts').add({
			message: input,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			profilePic: user.photoURL,
			username: user.displayName,
			image: imageUrl,
		      })

		   // some clever firebase database stuff here


		   

		   setInput("");       //this will make the data entered by the user n once clicked ENTER it creates new entry
		   setImageUrl("");   //this will make the data entered by the user n once clicked ENTER it creates new entry
	   };


	return (
		<div className="messageSender">
                   
		   <div className="messageSender__top">
			   {/* use image will be displayed here */}
                       <Avatar src={user.photoURL}/> 
                       <form>
			       {/* any user can type here */}

			       <input 
			       value={input}
                               onChange={e => setInput(e.target.value)}
			       className="messageSender__input"
			       placeholder={`What's on your mind, ${user.displayName}?`}
                               />
			       {/* can place any image */}

			       <input 
			       value={imageUrl}
			       onChange={e => setImageUrl(e.target.value)}
			       placeholder={'Image URL(Optional)'}/>

			       {/* hidden button */}

			       <button onClick={handleSubmit} type="submit">
				       Hidden submit
			       </button>


		       </form>

		   </div>

                  
		  <div className="messageSender__bottom">
                        <div className="messageSender__option">
                            <VideocamIcon style ={{ color: "red"}} />
			    <h3>Live Video</h3>
                       </div>
		       <div className="messageSender__option">
                          <PhotoLibraryIcon style={{ color: 'green' }} />
                          <h3>Photo/Video</h3>
                         </div>
                        <div className="messageSender__option">
                          <InsertEmoticonIcon style={{ color: 'orange' }} />
                      <h3>Feeling/Activity</h3>
                        </div>
		  </div>
		</div>
	)
}

export default MessageSender
