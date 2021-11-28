import * as AiIcon from 'react-icons/ai';
import * as BsIcon from 'react-icons/bs';
import Fade from 'react-reveal/Fade';

import { Title } from '../../utility/Title/Title.style';

import img from './img/sectionStreaming.jpg';

export const titleText = 'Streaming';

export const text = (
  <>
    <Fade top>
      <p>
        The purpose of Cloud Streaming is to make playing games and streaming be
        effortless. With Cloud Streaming you can stream from any device directly
        to your streaming platform. With the capability to stream at 1080p with
        60 FPS directly to your live audience , for free.
      </p>
    </Fade>
    <Fade top>
      <p>
        All you need is a stable internet connection and you will be able to
        stream to your platform.
      </p>
    </Fade>
    <Fade top>
      <p>
        If you have slow internet , you can also stream at 1080 p 30 FPS , 720 p
        60 FPS , 720 p 30 FPS , and even at 480 p 60 FPS.
      </p>
    </Fade>
  </>
);

export const dynamic = (
  <>
    <br />
    <Title>
      <Fade top>
        <h2 style={{ marginTop: '3rem', marginBottom: '2rem' }}>
          DYNAMIC RESOLUTION
        </h2>
      </Fade>
    </Title>
    <Fade top>
      <p>
        If you dont know which resolution is perfect for your internet speed ,
        We have Dynamic Resolution.
      </p>
    </Fade>
    <Fade top>
      <p>
        With Dynamic Resolution , you dont have to worry about choosing your
        Stream Quality. Our system will automatically choose the best resolution
        with respect to your internet speed in real time. As you progress your
        stream and your internet speed fluctuates Dynamic Resolution will
        automatically decrease your video quality so that your viewers can have
        60 FPS constant at all times and have a smooth viewing of your stream.
      </p>
    </Fade>
  </>
);

export const src = img;

export const logo = [
  { icon: <AiIcon.AiFillYoutube /> },
  { icon: <BsIcon.BsTwitch /> },
];
