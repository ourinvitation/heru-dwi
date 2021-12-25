import React, { Fragment } from 'react';
import { bool } from 'prop-types';
import { styWrapper, styFlex } from './styles';

function FooterSection({ isInvitation }) {
  return (
    <Fragment>
          <div id="fh5co-started" className="fh5co-bg" css={styWrapper}>
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                <h2 className="main-font">Terima Kasih</h2>
                <p>
                  Berdasarkan kondisi saat ini, tanpa mengurangi rasa hormat, <br />diharapkan tetap bisa menjalin silaturahmi
                  melalui media online, <br />bukan dengan kontak fisik secara langsung.<br /> 
                  Mohon pengertiannya.
                </p>
                <p>
                  Atas segala do'a dan restu saudara/i, <br />kami ucapkan terima kasih. <br />
                  Wassalamu'alaikum Wr. Wb
                </p>
              </div>
            </div>
            <div className="row" css={styFlex}>
              <div className="col-md-5">
                  <a className="btn btn-default btn-block" target="_BLANK" href="https://forms.gle/Pj9BHhwomdk2sZDz8"><i className="icon-link"></i> Kirim Ucapan Selamat &amp; Doa</a>
              </div>
            </div>
          </div>
        </div>
      <footer id="fh5co-footer" role="contentinfo">
        <div className="container">
          <div className="row copyright">
            <div className="col-md-12 text-center">
              <p>
                <small className="block">&copy; 2021 Agung & Hana Wedding. All Rights Reserved.</small>
                <small className="block">
                  Song by{' '}
                  <a href="https://www.youtube.com/watch?v=fb167KAxvrg" target="_blank" rel="noreferrer">
                    Anandito Anisa - Pernikahan Impian
                  </a>
                </small>
                <small className="block">
                  Original Template from{' '}
                  <a href="http://colorlib.com/" target="_blank" rel="noreferrer">
                    COLORLIB.com
                  </a>
                </small>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}

FooterSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(FooterSection);
