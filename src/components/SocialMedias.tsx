import Image from 'next/image';

export const SocialMedias = () => {
  return (
    <div className="flex space-x-4">
      <a href='https://www.linkedin.com/in/rodrigovilelaferreira/' target="_blank">
        <Image
          src="/linkedin.svg"
          alt="LinkedIn Logo"
          width={30}
          height={30}
          priority
        />
      </a>
      <a href='https://github.com/rodrigovilelaferreira' target="_blank">
        <Image
          src="/github.svg"
          alt="GitHub Logo"
          width={30}
          height={30}
          priority
        />
      </a>
    </div>
  );
};

export default SocialMedias;