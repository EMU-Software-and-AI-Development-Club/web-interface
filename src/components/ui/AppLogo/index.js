import appLogo from '@/assets/images/logo.png';
import Image from 'next/image';
import { PropTypes } from 'prop-types';
const AppLogo = (props) => {
  const size = props.size || 80;
  return (
    <Image width={size} height={size} src={appLogo} alt="App Logo" priority />
  );
};
AppLogo.propTypes = {
  size: PropTypes.number,
};
export default AppLogo;
