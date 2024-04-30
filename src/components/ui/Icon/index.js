import React from 'react';
import PropTypes from 'prop-types';
import { MdMenu, MdClose } from 'react-icons/md';
import { GiEmptyChessboard } from 'react-icons/gi';
import { TfiAngleDown, TfiAngleUp } from 'react-icons/tfi';
import { FaLinkedin, FaWhatsapp, FaInstagram, FaDiscord } from 'react-icons/fa';
import { RxArrowBottomRight } from 'react-icons/rx';
const Icon = ({ icon, ...rest }) => {
  const icons = React.useMemo(
    () => ({
      menu: MdMenu,
      close: MdClose,
      'angle-down': TfiAngleDown,
      'angle-up': TfiAngleUp,
      'arrow-bottom-right': RxArrowBottomRight,
      whatsapp: FaWhatsapp,
      instagram: FaInstagram,
      discord: FaDiscord,
      linkedin: FaLinkedin,
      default: GiEmptyChessboard,
    }),
    []
  );
  const ReactIcon = icons[icon] ? icons[icon] : icons.default;
  return <ReactIcon {...rest} />;
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default Icon;
