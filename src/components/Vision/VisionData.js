import * as BsIcon from 'react-icons/bs';
import * as AiIcon from 'react-icons/ai';
import * as MdIcon from 'react-icons/md';

import controller from "./img/controller.jpg"

export const back = controller

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
