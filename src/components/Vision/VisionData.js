import * as BsIcon from 'react-icons/bs';
import * as AiIcon from 'react-icons/ai';
import * as MdIcon from 'react-icons/md';

import controller from './img/controller.jpg';

export const back = controller;

export const title = 'our vision';

export const sub = `Our Vision at Cloud Streaming is to make the lives of small
streamers and content creators easier. We want to help people who
aspire to be full time streamers or content creators but do not
have the expensive hardware for it.`;

export const subtext = `With Cloud Streaming , you do not have to worry about your
hardware.`;

export const services = [
  {
    iconTitle: <MdIcon.MdHighQuality />,
    title: 'BEST VIDEO QUALITY',
    place: 'justify',
    text: 'stream all your games at 4k resolution at 60 fps or 1080p 144 fps WIDE ARRAY OF VIDEO GAMES Cloud Streaming connects with any digital library so that you can play any game you own.',
  },
  {
    title: 'SUPPORTS MULTIPLE DEVICES',
    place: 'justify',
    icons: [
      { icon: <BsIcon.BsPhone /> },
      { icon: <BsIcon.BsTablet /> },
      { icon: <BsIcon.BsLaptop /> },
    ],
    text: 'Play games at your comfort on a large range of devices such as Windows, Android, Mac, IOS and Linux.',
  },
  {
    iconTitle: <AiIcon.AiFillThunderbolt />,
    place: 'center',
    title: 'LOW LATENCY',
    text: 'Play your games at the lowest latency possible',
  },
];
