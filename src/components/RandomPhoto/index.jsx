import React from 'react'
import { Button } from 'reactstrap'
import './RandomPhoto.scss'
const getRandomImageUrl = () => {
    const randomId = Math.trunc(Math.random() * 100);
    return `https://picsum.photos/id/${randomId}/200/200`
}
function RandomPhoto(props) {
    const { name, imageUrl, onImageUrlChange, onRandomButtonBlur, className } = props;

    const handleRandomPhotoClick = async () =>{
        if(onImageUrlChange){
            const randomImageUrl = getRandomImageUrl();
            onImageUrlChange(randomImageUrl);
        }
    }
    return (
        <div className="random-photo" className={className}>
            <div className="random-photo__button">
                <Button outline name={name} color="primary" onBlur={onRandomButtonBlur} onClick={handleRandomPhotoClick}>Random Photo</Button>
            </div>
            <div className="random-photo__photo">
                {imageUrl && <img src={imageUrl} alt="Oops ... not found. Please click for next button"/>}
            </div>
        </div>

    )
}



export default RandomPhoto

