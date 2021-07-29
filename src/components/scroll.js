import React, { useState}  from 'react';

function Scroll() {

const [scroll, setScroll] = useState(false);

const fadeScroll = () => {
    console.log(window.scrollY);
        // if(window.scrollY >= 80) {
        //   setScroll(true)
        // } else {
        //   setScroll(false)
        // }
};

window.addEventListener('scroll', fadeScroll);

return (
    <div className={scroll ? 'scroll-down active' : 'scroll-down '}></div>
  )
}
export default Scroll;