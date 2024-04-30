import React from 'react';
import Icon from '@/components/ui/Icon';
import PropTypes from 'prop-types';
import { cn } from '@/utils';
const IconButton = ({ icon, as = 'default', className, onClick }) => {
  const [index, setIndex] = React.useState(0);
  const isToggle = as === 'toggle';
  const handleClick = () => {
    if (isToggle) {
      setIndex(index === 1 ? 0 : 1);
    }
    onClick();
  };
  return (
    <button
      className={cn(
        'w-8 h-8 flex justify-center items-center rounded-md',
        className
      )}
      onClick={handleClick}
    >
      <Icon icon={isToggle ? icon[index] : icon} size={25} />
    </button>
  );
};
IconButton.propTypes = {
  icon: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string,
  ]).isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  as: PropTypes.string,
};
export default IconButton;
