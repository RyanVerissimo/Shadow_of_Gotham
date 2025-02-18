import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ContainerCameras = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    padding: 20px;
    margin-bottom: 40px;
    justify-content: center;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 480px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const VideoBox = styled.div`
    width: 100%;
    max-width: 400px;
    height: 200px;
    text-align: center;
    margin: 0 auto;
`;

export const Videos = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    cursor: pointer;
`;

export const Title = styled.h1`
    color: #fff;
    margin-bottom: 30px;
    font-size: 2rem;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }

    @media (max-width: 480px) {
        font-size: 1.2rem;
    }
`;

export const TitleVideos = styled.h2`
    color: #fff;
    font-size: 1.2rem;
    margin-top: 10px;

    @media (max-width: 768px) {
        font-size: 1rem;
    }

    @media (max-width: 480px) {
        font-size: 0.9rem;
    }
`;
