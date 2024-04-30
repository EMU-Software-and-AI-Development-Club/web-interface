import Image from 'next/image';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import { Button, Icon } from '@/components/ui';
import settings from '@/settings';
export default function Home() {
  return (
    <Layout>
      <Hero />
      <section className="py-20 container space-y-10">
        <h1 className="text-lg flex items-end space-x-2 text-[#8c949e]">
          <span>We have connections in the Tech industry</span>
          <span>
            <Icon icon="arrow-bottom-right" size={25} />
          </span>
        </h1>
        <div className="flex gap-10 flex-wrap">
          {settings.companyConnections.map((company, i) => (
            <Image key={i} src={company.logo} alt={company.name} height={40} />
          ))}
        </div>
      </section>
      <section className="relative my-10 py-20 before:bg-[#1e1e1e] before:content-[''] before:w-screen before:h-full before:absolute before:top-0 before:-left-4 lg:before:-left-6 before:-z-10 ">
        <div className="container  px-4 flex gap-10 items-center flex-wrap">
          <p className="text-xl">Join, collaborate, grow ...</p>
          <Button text="Join Us" />
        </div>
      </section>
    </Layout>
  );
}
