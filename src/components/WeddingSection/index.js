import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import WeddingInfoBox from './WeddingInfoBox';
import { styWrapper } from './styles';

function WeddingSection({ isInvitation }) {
  return (
    <Fragment>
      <div id="fh5co-event" css={styWrapper}>
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <span className="bismillah">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</span>
              <h2 className="main-font main-font__wedding">Akad dan Resepsi Pernikahan</h2>
              <span className="sub-title sub-title__wedding">Insha Allah akan diselenggarakan pada:</span>
            </div>
          </div>
          <div className="row">
              <div className="col-md-10 col-md-offset-1">
                <WeddingInfoBox
                  title="Akad Nikah"
                  time="Pagi Hari "
                  date="Sabtu, 06 Februari 2021"
                  description="Grand Ballroom <br/>Hotel Ambhara (Lt. 1), Jakarta Selatan"
                />
                <WeddingInfoBox
                  title="Resepsi Pernikahan"
                  time="Sesuai Jadwal di Undangan"
                  date="Sabtu, 06 Februari 2021"
                  description="Grand Ballroom <br/>Hotel Ambhara (Lt. 1), Jakarta Selatan"
                />
              </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

WeddingSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(WeddingSection);
