// Hooks
import useScreenSize from '../Hooks/useScreenSize';

// Components
import Footer from '../Components/Footer';
import Navi from '../Components/Navi';

import { Outlet } from 'react-router-dom';

function Root() {
  const screenSize = useScreenSize();

  return (
    <>
      {screenSize.width > 700 && <Navi />}
      <Outlet />
      <Footer />
    </>
  );
}
export default Root;
