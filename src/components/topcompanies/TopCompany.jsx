import React from 'react';
import './TopCompany.css';

import slider1_1 from '../../assets/slider1_1.png';
import slider1_3 from '../../assets/slider1_3.png';
import slider1_4 from '../../assets/slider1_4.png';
import slider1_5 from '../../assets/slider1_5.png';
import slider1_6 from '../../assets/slider1_6.png';
import slider1_2 from '../../assets/slider1_2.png';
import slider1_7 from '../../assets/slider1_7.png';
import slider1_8 from '../../assets/slider1_8.png';
import slider1_9 from '../../assets/slider1_9.png';
import slider1_10 from '../../assets/slider1_10.png';


const ImageSlider = () => {
  return (
    <main >
      <div className='text-3xl font-bold flex justify-center pb-10'>
        <h2>Top Company Partners</h2>
      </div>
      <div className="slider mt-10" style={{ '--width': '100px', '--height': '50px', '--quantity': '10' }}>
        <div className="list">
          <div className="item" style={{ '--position': 1 }}><img src={slider1_1} alt="slider1_1" /></div>
          <div className="item" style={{ '--position': 2 }}><img src={slider1_2} alt="slider1_2" /></div>
          <div className="item" style={{ '--position': 3 }}><img src={slider1_3} alt="slider1_3" /></div>
          <div className="item" style={{ '--position': 4 }}><img src={slider1_4} alt="slider1_4" /></div>
          <div className="item" style={{ '--position': 5 }}><img src={slider1_5} alt="slider1_5" /></div>
          <div className="item" style={{ '--position': 6 }}><img src={slider1_6} alt="slider1_6" /></div>
          <div className="item" style={{ '--position': 7 }}><img src={slider1_7} alt="slider1_7" /></div>
          <div className="item" style={{ '--position': 8 }}><img src={slider1_8} alt="slider1_8" /></div>
          <div className="item" style={{ '--position': 9 }}><img src={slider1_9} alt="slider1_9" /></div>
          <div className="item" style={{ '--position': 10 }}><img src={slider1_10} alt="slider1_10" /></div>
        </div>
      </div>

      <div className="slider mt-10 mb-20" id="slider-2" reversed="true" style={{ '--width': '160px', '--height': '180px', '--quantity': '9' }}>
        <div className="list">
          <div className="item" style={{ '--position': 1 }}><img src="https://logos-world.net/wp-content/uploads/2020/04/Samsung-Logo.png" alt="slider2_1" /></div>
          <div className="item" style={{ '--position': 2 }}><img src="https://clipground.com/images/apple-silhouette-png-4.png" alt="slider2_2" /></div>
          <div className="item" style={{ '--position': 3 }}><img src="https://s3.amazonaws.com/freebiesupply/large/2x/dell-logo-transparent.png" alt="slider2_3" /></div>
          <div className="item" style={{ '--position': 4 }}><img src="https://purepng.com/public/uploads/large/purepng.com-hp-logologobrand-logoiconslogos-2515199390657l82v.png" alt="slider2_4" /></div>
          <div className="item" style={{ '--position': 5 }}><img src="https://pngimg.com/uploads/lg_logo/lg_logo_PNG15.png" alt="slider2_5" /></div>
          <div className="item" style={{ '--position': 6 }}><img src="https://www.pngplay.com/wp-content/uploads/13/Nikon-Logo-Background-PNG-Image.png" alt="slider2_6" /></div>
          <div className="item" style={{ '--position': 7 }}><img src="https://th.bing.com/th/id/R.6bde68df1f7772499ea93d6470540969?rik=kIzhtdwcxgRZ5g&riu=http%3a%2f%2fmatoshreet.com%2fwp-content%2fuploads%2f2022%2f06%2fVoltas-AC-Logo-PNG.png&ehk=srrrr99JBSXoVRLj%2fe4Im36E5XIngDepuaseZZxYTPo%3d&risl=&pid=ImgRaw&r=0" alt="slider2_7" /></div>
          <div className="item" style={{ '--position': 8 }}><img src="https://www.pngarts.com/files/1/Lenovo-Logo-Transparent-Image.png" alt="slider2_8" /></div>
          <div className="item" style={{ '--position': 9 }}><img src="https://1000logos.net/wp-content/uploads/2017/04/Motorola-Logo.png" alt="slider2_9" /></div>
        </div>
      </div>
    </main>
  );
};

export default ImageSlider;
