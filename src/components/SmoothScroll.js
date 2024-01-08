import { useEffect } from 'react';
import Scrollbar from "smooth-scrollbar";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll"

Scrollbar.use(OverscrollPlugin);

// This is for mobile view or mobile version of scrolling 
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

// overscrollOptions for making the page Animation
var overscrollOptions = {
  enable: true,
  effect: 'bounce',
  damping: 0.05,
  maxOverscroll: 150,
}
//  this the options of this page Animation objects of the plugins using like a options
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

// THis function works overall functionality if Scroll Element 
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