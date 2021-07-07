import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'reactstrap'
import { Link, useHistory } from 'react-router-dom'
import Banner from 'components/Banner'
import Images from 'constants/images'
import { useDispatch, useSelector } from 'react-redux'
import PhotoList from 'features/Photo/components/PhotoList'
import { removePhoto } from 'features/Photo/photoSlice'

function MainPage(props) {
    const dispatch = useDispatch();
    // Select use store to access the reducer then state
    const photos = useSelector(state => state.photos);
    const history = useHistory();
    
    const handlePhotoEditClick = (photo) => {
        console.log('Edit:', photo);
        const editPhotoUrl = `/photos/${photo.id}`;
        history.push(editPhotoUrl);
    }
    const handlePhotoRemoveClick = (photo) => {
        console.log('Remove: ', photo);
        const removePhotoId = photo.id;
        const action = removePhoto(removePhotoId);
        dispatch(action);
    }
    return (
        <div className="photo-main">
            <Banner title="Main page Title" backgroundUrl={Images.LANDSCAPE_BG}></Banner>
                
            <Container className="text-center">
                

                <PhotoList
                    photoList={photos}
                    onPhotoEditClick={handlePhotoEditClick}
                    onPhotoRemoveClick={handlePhotoRemoveClick}
                />
                <div className="py-5">
                    <Link to="/photos/add">Add new Photo</Link>
                </div>
            </Container>
        </div>
    )
}

MainPage.propTypes = {

}

export default MainPage;

