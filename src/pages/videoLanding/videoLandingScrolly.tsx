import ScrollyVideo from 'scrolly-video/dist/ScrollyVideo.esm.jsx';

export default function VideoLandingScrolly() {
    return (
        <div style={{height: '500vh'}}>
            <ScrollyVideo src="/videos/landingBg.mp4" />
        </div>
    );
}