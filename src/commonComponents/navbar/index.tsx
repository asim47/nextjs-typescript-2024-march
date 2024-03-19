import { usePathname } from 'next/navigation';
import React from 'react';
import { useEnhancedSelector } from '../../Helpers/reduxHooks';
import { useDevice } from '../../Helpers/useDevice';

const Navbar = () => {
  const { IsWeb } = useDevice();

  const isAuth = useEnhancedSelector((state) => state.user.isAuth);

  if (!isAuth) return <></>;

  return (
    <nav>
      Navbar
    </nav>
  )
};

export default Navbar;
