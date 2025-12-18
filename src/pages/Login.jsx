
import React from 'react';
import useIsMobile from '../../hooks/useIsMobile';

import LoginDesktop from '../components/desktop/LoginDesktop';
import LoginMobile from '../components/mobile/LoginMobile';

export default function Login() {
  const isMobile = useIsMobile(768);

  return isMobile ? <LoginMobile /> : <LoginDesktop />;
}
