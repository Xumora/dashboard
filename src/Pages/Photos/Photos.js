import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { setPhotos } from '../../redux/actions';
import PhotosWrapper from './PhotosWrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faEye, faHeart } from '@fortawesome/free-solid-svg-icons';

const Photos = () => {
    const photos = useSelector(state => state.photos)

    const dispatch = useDispatch()

    useEffect(() => {
        setPhotos(dispatch);
    }, [])

    const title = (text) => {
        let newStr = text[0].toUpperCase() + text.slice(1)
        return newStr;
    }

    return (
        <PhotosWrapper>
            <div className="container py-5">
                <h1>Photos Gallery</h1>
                <div className="row mt-3">
                    {
                        photos.map((photo, index) => {
                            return <div className="col-3 mb-4" key={photo.id}>
                                <div className="img-box bg-white p-3 shadow d-flex flex-column justify-content-between h-100">
                                    <div>
                                        <img src={photo.url} alt="?" className="w-100" />
                                        <h6 className="fw-bold mb-0 mt-2">{title(photo.title)}</h6>
                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <button className="btn text-muted p-0 ms-3"><FontAwesomeIcon icon={faEye} /> {index}</button>
                                        <button className="btn text-muted p-0 ms-3"><FontAwesomeIcon icon={faHeart} /> {index}</button>
                                        <button className="btn text-muted p-0 ms-3"><FontAwesomeIcon icon={faComment} /> {index}</button>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </PhotosWrapper>
    )
}

export default Photos;
