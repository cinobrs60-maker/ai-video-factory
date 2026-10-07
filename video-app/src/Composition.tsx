import { CalculateMetadataFunction, Composition } from "remotion";
import {AbsoluteFill, OffthreadVideo, staticFile} from "remotion";
type Props = {};

const calculateMetadata: CalculateMetadataFunction<Props> = () => {
  return {};
};

export const MyComposition = () => {
  return (
    <Composition
      id="MyComp"
      component={MyComponent}
      durationInFrames={270}
      fps={30}
      width={1080}
      height={1920}
      calculateMetadata={calculateMetadata}
    />
  );
};

export const MyComponent: React.FC<Props> = () => {
  return <AbsoluteFill><OffthreadVideo src={staticFile("video.mp4")} /><div style={{color:"white",fontSize:80,textAlign:"center",position:"absolute",width:"100%",top:1400}}>Hello</div></AbsoluteFill>;
};
