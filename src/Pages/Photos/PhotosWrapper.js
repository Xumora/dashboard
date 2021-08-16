import styled from "styled-components";

const PhotosWrapper = styled.div`
    background-color: rgba(236, 154, 236, 0.3);

    .img-box{
        transition: .5s;
        img{height: 229px; object-fit: cover;}
        &:hover{
            color: violet !important;
            transform: scale(1.05)
        }
    }
`
export default PhotosWrapper