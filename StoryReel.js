import React from 'react'
import "./StoryReel.css";
import Story from "./Story";
function StoryReel() {
	return (
		<div className="storyReel"> 
			{/* story */}
	<Story
        image="https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg"
        profileSrc="https://avatars3.githubusercontent.com/u/30196405?s=460&u=6bd3c8280b827a0ea3f661fc7c0c65117b19bc61&v=4"
        title="Shashwath"
      />
      <Story
        image="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg"
        profileSrc="https://avatars3.githubusercontent.com/u/30196405?s=460&u=6bd3c8280b827a0ea3f661fc7c0c65117b19bc61&v=4"
        title="Kruthik"
      />
      <Story
        image="https://i.pinimg.com/originals/a7/3d/6e/a73d6e4ac85c6a822841e449b24c78e1.jpg"
        profileSrc="https://avatars3.githubusercontent.com/u/30196405?s=460&u=6bd3c8280b827a0ea3f661fc7c0c65117b19bc61&v=4"
        title="Shivu"
      />
      <Story
        image="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg"
        profileSrc="https://avatars3.githubusercontent.com/u/30196405?s=460&u=6bd3c8280b827a0ea3f661fc7c0c65117b19bc61&v=4"
        title="Rohith"
      />
      <Story
        image="https://i.pinimg.com/originals/a7/3d/6e/a73d6e4ac85c6a822841e449b24c78e1.jpg"
        profileSrc="https://avatars3.githubusercontent.com/u/30196405?s=460&u=6bd3c8280b827a0ea3f661fc7c0c65117b19bc61&v=4"
        title="Goverdan"
      />
		</div>
	)
}

export default StoryReel
