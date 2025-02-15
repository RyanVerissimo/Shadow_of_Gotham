import { ContainerCameras, Videos, VideoBox, TitleVideos, Title, Container, } from "./styles"
import Global from "../../styles/global"
import video1 from "../../assets/video1.mp4"
import video2 from "../../assets/video2.mp4"
import video3 from "../../assets/video3.mp4"
import video4 from "../../assets/video4.mp4"
import video5 from "../../assets/video5.mp4"
import video6 from "../../assets/video6.mp4"
import video7 from "../../assets/video7.mp4"
import video8 from "../../assets/video8.mp4"
import video9 from "../../assets/video9.mp4"
import video10 from "../../assets/video10.mp4"
import video11 from "../../assets/video11.mp4"
import video12 from "../../assets/video12.mp4"
import { BackButton } from "../../components/BackButton"


const CamerasCity = () => {
    return(
        <>
            <Container>
                <Title>Camera Control Center 🔴</Title>
                <ContainerCameras>
                    <Global />
                    <VideoBox>
                        <TitleVideos>Golden Bridge</TitleVideos>
                        <Videos autoPlay loop muted src={video1}></Videos>
                    </VideoBox>
                    <VideoBox>
                        <TitleVideos>Scieyts Town</TitleVideos>
                        <Videos autoPlay loop muted src={video2}></Videos>
                    </VideoBox>
                    <VideoBox>
                        <TitleVideos>Crystal Ridge</TitleVideos>
                        <Videos autoPlay loop muted src={video3}></Videos>
                    </VideoBox>
                    <VideoBox>
                        <TitleVideos>Central Park</TitleVideos>
                        <Videos autoPlay loop muted src={video4}></Videos>
                    </VideoBox>
                    <VideoBox>
                        <TitleVideos>Falconcrest Vale</TitleVideos>
                        <Videos autoPlay loop muted src={video5}></Videos>
                    </VideoBox>
                    <VideoBox>
                        <TitleVideos>Ravenwood Plains</TitleVideos>
                        <Videos autoPlay loop muted src={video6}></Videos>
                    </VideoBox>
                    <VideoBox>
                        <TitleVideos>Bluewater Glade</TitleVideos>
                        <Videos autoPlay loop muted src={video7}></Videos>
                    </VideoBox>
                    <VideoBox>
                        <TitleVideos>Bluewater Back</TitleVideos>
                        <Videos autoPlay loop muted src={video8}></Videos>
                    </VideoBox>
                    <VideoBox>
                        <TitleVideos>Starwood Heights</TitleVideos>
                        <Videos autoPlay loop muted src={video9}></Videos>
                    </VideoBox>
                    <VideoBox>
                        <TitleVideos>Elderfield Cove</TitleVideos>
                        <Videos autoPlay loop muted src={video10}></Videos>
                    </VideoBox>
                    <VideoBox>
                        <TitleVideos>Starlight Haven</TitleVideos>
                        <Videos autoPlay loop muted src={video11}></Videos>
                    </VideoBox>
                    <VideoBox>
                        <TitleVideos>Moonfall Creek</TitleVideos>
                        <Videos autoPlay loop muted src={video12}></Videos>
                    </VideoBox>
                </ContainerCameras>
                <BackButton />
            </Container>
            
        </>
        
    )
}

export { CamerasCity }