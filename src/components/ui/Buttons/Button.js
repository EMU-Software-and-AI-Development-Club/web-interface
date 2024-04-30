import { useNavigator } from 'next/router';
import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';
import { cn } from '@/utils';
const Button = ({ as, text, onClick, ...props }) => {
  const router = useRouter();
  if (as === 'link') {
    onClick = () => router.push(props.href);
  }
  return (
    <button
      onClick={onClick}
      {...props}
      className={cn(
        'py-3 px-5 rounded-md border-t border-t-white/10 bg-primary',
        props.className
      )}
    >
      {text}
    </button>
  );
};
Button.propTypes = {
  text: PropTypes.string.isRequired,
  as: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
};
Button.Secondary = (props) => (
  <Button {...props} className={cn('bg-[#1e1e1e]', props.className)} />
);
Button.Outline = (props) => (
  <Button
    {...props}
    className={cn('border-2 border-white bg-transparent', props.className)}
  />
);
export default Button;
