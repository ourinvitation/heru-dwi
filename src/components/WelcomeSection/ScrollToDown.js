import React from 'react';

import { styScrollWrapper } from './styles';
import { bool, func } from 'prop-types';

function ClickToSeeDetail({ guestName, loading, onClick }) {
  // if (guestName) {
    return (
      <div css={styScrollWrapper} onClick={onClick}>
        <section id="scroll" className="scroll__icon">
          <div className="button">
            <span></span>
          </div>
          <span className="text">{loading ? 'Menyiapkan data..' : 'Klik untuk Melihat Detil Acara'}</span>
        </section>
      </div>
    );
  // } else {
  //   return ('');
  // }
}

ClickToSeeDetail.propTypes = {
  loading: bool.isRequired,
  onClick: func.isRequired,
};

export default ClickToSeeDetail;
