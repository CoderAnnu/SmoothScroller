import { useEffect } from 'react';
import Scrollbar from "smooth-scrollbar";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll"

Scrollbar.use(OverscrollPlugin);

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);


var overscrollOptions = {
  enable: true,
  effect: 'bounce',
  damping: 0.05,
  maxOverscroll: 150,
}
const options = {
  damping: isMobile ? 0.05 : 0.1,
  thumbMinSize: 100,
  renderByPixels: !('ontouchstart' in document),
  alwaysShowTracks: false,
  continuousScrolling: true,
  Plugins: {
        overscroll: { ...overscrollOptions }
      }
};


// var options = {
//   damping: 0.07,
//   Plugins: {
//     overscroll: { ...overscrollOptions }
//   }

// }

const Scroll = () => {

  useEffect(() => {
    Scrollbar.use(OverscrollPlugin)
    Scrollbar.init(document.body, options);

    return () => {
      if (Scrollbar) Scrollbar.destroy(document.body);
    };
  }, []);
  return null;

}
export default Scroll;