import Image from 'next/image';
import SocialMedias from './SocialMedias';

export const Footer = () => {
  return (
<footer className="footer bg-[#1A171F] text-neutral-content items-center p-4">
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <SocialMedias/>
  </nav>
</footer>
  );
}

export default Footer;
