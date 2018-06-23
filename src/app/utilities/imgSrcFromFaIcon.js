import { COLOR } from 'app/constants';

const imgSrcFromFaIcon = (faIcon, fill = COLOR.DARKER_GRAY) => {
  const svgData = faIcon.icon;
  return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 ${
    svgData[0]
  } ${svgData[1]}" fill="${fill}"><path d="${svgData[4]}"/></svg>`;
};
export default imgSrcFromFaIcon;
