import React from 'react'
import PropTypes from 'prop-types'
import Banner from 'components/Banner';
import PhotoForm from 'features/Photo/components/PhotoForm';
import Images from 'constants/images';
import './styles.scss'
import { addPhoto, updatePhoto } from 'features/Photo/photoSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

function AddEditPage(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const { photoId } = useParams();
    //+photoId parst from string to int
    const editedPhoto = useSelector(state => state.photos.find(photo => photo.id === +photoId));
    const isAddMode = !photoId;
    const initialValues = isAddMode ? {
        title: '',
        categoryId: null,
        photo: ''
    } : editedPhoto;
    const handleSubmit = (values) => {

        return new Promise(resolve => {
            console.log('Form submit: ', values);

            setTimeout(() => {
                if (isAddMode) {
                    const newPhoto = {
                        ...values, id: Math.trunc(Math.random() * 100000)
                    }
                    const action = addPhoto(newPhoto);
                    dispatch(action);
                } else {
                    const action = updatePhoto(values);
                    dispatch(action);
                }
                history.push('/photos');
                resolve(true);
            }, 2000);

        })


    }
    return (
        <div className="photo-edit">
            <Banner title="Add & edit page" backgroundUrl={Images.WOLF_BG} />

            <div className="photo-edit__form">
                <PhotoForm
                    isAddMode={isAddMode}
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                />
            </div>
        </div>
    )
}

AddEditPage.propTypes = {

}

export default AddEditPage;

