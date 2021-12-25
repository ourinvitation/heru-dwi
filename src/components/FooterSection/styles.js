import { css } from '@emotion/core';
import Background from '@assets/images/gallery-10.jpg';

export const styWrapper = css`
  background-image: url(${Background});
  background-size: cover;
  background-position: initial;

  p {
    color: rgba(255, 255, 255, 0.8) !important;
  }
  @media screen and (max-width: 767px) {
    background-position: center;
  }
  @media screen and (max-width: 500px) {
    .fh5co-heading p {
      font-size: 16px;
    }
  }
`;

export const styFlex = css`
  display: flex;
  justify-content: center;
`;
