import Image from 'next/image';

export const Header = () => {
  return (
    <header className="p-2 bg-[#1A171F] flex justify-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={150}
            height={100}
            priority
          />
    </header>
  );
}

export default Header;
