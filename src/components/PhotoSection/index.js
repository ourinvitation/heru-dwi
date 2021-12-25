import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { photos } from './photo-data';

function PhotoSection() {

  return (
    <div id="fh5co-testimonial" className="">
      <div className="container">
        <div className="row">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font">#AgungHana2021</h2>
              <p className="sub-title">
                "Dan di antara tanda-tanda kekuasaan-Nya ialah diciptakanNya untukmu pasangan hidup 
                dari jenismu sendiri, supaya kamu mendapat ketenangan hati dan dijadikan-Nya 
                kasih sayang di antara kamu. Sesungguhnya yang demikian itu menjadi tanda-tanda 
                kebesaran-Nya bagi orang-orang yang berpikir." <br />
                (QS. Ar-Rum: 21).
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <ImageGallery items={photos} showBullets={false} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoSection;
