//Utils(Images, Colors, Typography, Interfaces, etc.)
import { AudioPlayerProps } from '../../lib/utils/interfaces';

function AudioPlayer({ src, controls = true }: AudioPlayerProps) {
  return (
    <audio controls={controls} className="w-full">
      <source src={src} type="audio/mpeg" />
      Your browser does not support the audio tag.
    </audio>
  );
}

export default AudioPlayer;
