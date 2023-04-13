import React from 'react'

/* 
Deliverables
- Use the `useState` hook for the `image` and `likes` variables
- When the New Fox button is clicked, use the `handleNewFoxClick` function to fetch a random fox image. Use the image response from fetch to set the image variable.
- When the Like button is clicked, create an event handler that will increment the number of likes in state. Use the callback version of the state setter function to set the new number of likes.
*/

function App() {
  const image = "https://randomfox.ca/images/41.jpg"
  const likes = 0
  
  function handleNewFoxClick() {
    fetch("https://randomfox.ca/floof/")
      .then((response) => response.json())
      .then(({ image }) => {
        console.log(image)
      })
  }
  
  return (
    <div>
      <h1>🦊 FoxFindr 🦊</h1>
      <div className="buttons">
          <button>New 🦊 Please</button>
          <button>Likes: {likes}</button>
      </div>
      <img src={image} alt="Random Fox" />
    </div>
  );
}

export default App



////////////////////////////////////////////////////////////////

//Answer Key

import React, { useState } from 'react' //<- imported {useState} function

/* 
Deliverables
- Use the `useState` hook for the `image` and `likes` variables
- When the New Fox button is clicked, use the `handleNewFoxClick` function to fetch a random fox image. Use the image response from fetch to set the image variable.
- When the Like button is clicked, create an event handler that will increment the number of likes in state. Use the callback version of the state setter function to set the new number of likes.
*/

function App() {
  const [image, setImage] = useState("https://randomfox.ca/images/41.jpg")
  const [likes, setLikes] = useState(0)
  
  function handleNewFoxClick() {
    fetch("https://randomfox.ca/floof/")
      .then((response) => response.json())
      .then(({ image }) => {
        // console.log(image)
        setImage(image)
        setLikes(0) //This will reset the like counter back to 0 every time a new fox image is rendered
      })
  }
  
  function handleLikeClick() {
    // setLikes(likes + 1) <- simplified syntax (not best practice)
    setLikes(likes => likes + 1) //<- React best practice syntax
  }
  
  return (
    <div>
      <h1>🦊 FoxFindr 🦊</h1>
      <div className="buttons">
          <button onClick={handleNewFoxClick}>New 🦊 Please</button>
          <button onClick={handleLikeClick}>Likes: {likes}</button>
      </div>
      <img src={image} alt="Random Fox" />
    </div>
  );
}

export default App