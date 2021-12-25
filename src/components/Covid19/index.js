import React from 'react';

import IconMask from './assets/masker.png';
import IconSocialDistancing from './assets/jaga-jarak.png';
import IconCheck from './assets/cek-suhu.png';
import IconWashHand from './assets/cuci-tangan.png';
import IconShakeHand from './assets/tidak-jabat.png';
import IconGather from './assets/tidak-berkerumun.png';
import SectionBox from './SectionBox';

function CovidSection() {
  return (
    <div id="fh5co-couple">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2 className="main-font">Panduan Protokol Covid-19</h2>
            <p className="info" style={{ marginBottom: '-16px' }}>
              Keberlangsungan acara ini mengacu pada pedoman kesehatan dari Kementerian Kesehatan:
            </p>
          </div>
        </div>
        {/* BOX INFO */}
        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <SectionBox icon={IconMask} text="Menggunakan Masker" />
            <SectionBox icon={IconWashHand} text="Mencuci Tangan" />
            <SectionBox icon={IconSocialDistancing} text="Menjaga Jarak" />
            <SectionBox icon={IconCheck} text="Cek Suhu Tubuh" />
            <SectionBox icon={IconShakeHand} text="Tidak Berjabat Tangan" />
            <SectionBox icon={IconGather} text="Foto Bersama Berjarak" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CovidSection;
