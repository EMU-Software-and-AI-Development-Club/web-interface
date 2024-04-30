import React from 'react';
import settings from '@/settings';
import { AppLogo, Button } from '@/components/ui';
import Link from 'next/link';
import { IconButton } from '@/components/ui';
import cn from 'classnames';
const HeaderMobile = ({ show }) => {
  return (
    <div
      className={cn(
        'fixed top-0 left-0 w-screen h-screen -z-10 bg-[#0C0C0C] pt-20',
        show ? 'block' : 'hidden'
      )}
    >
      <div className="flex flex-col h-full justify-between p-6">
        <ul className="divide-y divide-white/10">
          {settings.headerLinks.map((link, i) => (
            <li
              key={i}
              className="py-4 hover:text-primary transition-opacity duration-150"
            >
              <Link href={link.route}>
                <span className="capitalize">{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-col space-y-4 mb-10">
          <Button.Secondary
            text="Login"
            as="link"
            href={settings.routes.login}
          />
          <Button text="Register" as="link" href={settings.routes.register} />
        </div>
      </div>
    </div>
  );
};
const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);
  return (
    <div className="flex gap-6 flex-row justify-between items-center z-20 mb-6">
      <div>
        <AppLogo size={50} />
      </div>
      {/** Mobile menu button*/}
      <div className="lg:hidden">
        <IconButton
          icon={['menu', 'close']}
          as="toggle"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        />
        <HeaderMobile show={showMobileMenu} />
      </div>
      <>
        <ul className="hidden lg:flex flex-1 space-x-4">
          {settings.headerLinks.map((link, i) => (
            <li key={i}>
              <Link href={link.route}>
                <span className="capitalize hover:text-primary transition-opacity duration-150">
                  {link.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="space-x-4 hidden lg:block">
          <Button.Secondary
            text="Login"
            as="link"
            href={settings.routes.login}
          />
          <Button text="Register" as="link" href={settings.routes.register} />
        </div>
      </>
    </div>
  );
};
export default Header;
