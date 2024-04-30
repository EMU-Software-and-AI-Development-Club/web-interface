import React from 'react';
import settings from '@/settings';
import { AppLogo } from '@/components/ui';
import Link from 'next/link';
import { Icon, IconButton } from '@/components/ui';
import { Disclosure } from '@headlessui/react';

const MobileFooter = () => {
  return (
    <div className="divide-y divide-white/10">
      {settings.footerLinks.map(({ category, links }) => (
        <div key={category} className="">
          <Disclosure key={category} as={'div'} className="">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between items-center w-full">
                  <span className="capitalize my-4">{category}</span>
                  <Icon icon={open ? 'angle-up' : 'angle-down'} />
                </Disclosure.Button>
                <Disclosure.Panel>
                  <ul className="pb-2">
                    {links.map((link) => (
                      <li key={link.label}>
                        <Link href={link.route}>
                          <span className="capitalize text-sm opacity-70">
                            {link.label}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      ))}
    </div>
  );
};

const Footer = () => {
  return (
    <div className="container mt-10 space-y-4">
      <div className="flex justify-between flex-col lg:flex-row">
        <div className="space-y-3">
          <AppLogo size={50} />
          <p className="text-base">EMU Software and AI Development Club</p>
        </div>
        <>
          <div className="block lg:hidden my-4">
            <MobileFooter />
          </div>
          <div className="space-x-10 hidden lg:flex">
            {settings.footerLinks.map(({ category, links }) => (
              <div key={category} className="text-left space-y-3">
                <span className="capitalize mb-5">{category}</span>
                <ul>
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.route}>
                        <span className="capitalize text-sm opacity-70">
                          {link.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </>
      </div>
      <div className="border-t-2 flex justify-between border-primary py-5 mt-10">
        <p>
          ©2023-2024 <span className="font-bold">EMUSOFT.AI</span> | All rights
          reserved
        </p>
        <div className="flex space-x-2">
          {settings.socialLinks.map(({ icon, link }, i) => (
            <a href={link} key={i} rel="noreferrer noopener">
              <IconButton icon={icon} className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
