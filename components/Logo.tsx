import React from 'react';
import { COMPANY_NAME, LOGO_URL } from '../constants';

const Logo: React.FC<{ className?: string }> = ({ className }) => (
  <img
    src={LOGO_URL}
    alt={`${COMPANY_NAME} Logo`}
    className={`${className} rounded-full object-cover`}
    loading="lazy"
  />
);

export default Logo;