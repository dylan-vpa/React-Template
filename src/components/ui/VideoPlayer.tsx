//Utils(Images, Colors, Typography, Interfaces, etc.)
import { VideoPlayerProps } from '../../lib/utils/interfaces';

function VideoPlayer({ src, controls = true }: VideoPlayerProps) {
  return (
    <video className="w-full" controls={controls}>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export default VideoPlayer;
