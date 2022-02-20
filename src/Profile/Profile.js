import React, { useEffect, useState } from 'react';
import './profile.css';
import { Avatar, Button } from "@material-ui/core";
import { auth } from "../firebase";
import firestore from "../firebase";
import FlipMove from "react-flip-move";
import Post from '../Post/Post';
const Profile = () => {
  const [currentUser, setCurrentUser] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    firestore.collection("posts").onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc => doc.data()))
    ))
  }, [])
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user)
    })
  }, [])
  console.log(currentUser)

  const handleEdit = () => {
    alert('Edit the Profile');
  }
  return (
    <div>

      <div className="container my-3">
        <div className='prf_1'>
          <img src="https://pbs.twimg.com/profile_banners/1216249045133463552/1627122675/1500x500" alt="..." />
        </div>
        <div className='prf_2 d-flex flex-fill'>
          <Avatar style={{width:'250px',height:'250px'}} src="https://pbs.twimg.com/profile_images/1406274463264645126/7s9GUSpa.jpg" />
          <Button onClick={handleEdit} className='edit_btn'>Edit Profile</Button>
        </div>
        <div className='prf_3'>
          <h1>Hassan</h1>
          <h4>{currentUser.email}</h4>
        </div>
      </div>
      <div className='prf_post'>
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            image={post.image}
            avatar={post.avatar}
          />
        ))}
      </FlipMove>
      </div>
    </div>
  );
};

export default Profile