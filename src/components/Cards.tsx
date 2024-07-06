import Image from 'next/image';
import SocialMedias from './SocialMedias';
export const Warning = ({ children }: any) => {
    return (
        <div className="card bg-[#A8A6AB50] w-9/12 shadow-xl">
        <figure className="px-10 pt-10">
          <Image
            src="/warning.png"
            alt="Aviso"
            width={250}
            height={200}
            priority
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-3xl">EM CONSTRUÇÃO!</h2>
          <h3 className="font-bold text-md">Estou trabalhando para que este website seja construido o mais rápido possivel e com qualidade.</h3>
          <p>Enquanto isto não acontece, é possivel acompanhar meus projetos também nas redes sociais abaixo!</p>
          <SocialMedias/>
        </div>
      </div>
    );
  };
  
  