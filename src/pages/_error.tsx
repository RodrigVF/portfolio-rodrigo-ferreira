import { useRouter } from 'next/router';
import { useEffect } from 'react';

const ErrorPage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/home');
  }, [router]);

  return null; // or some loading indicator if needed
};

export default ErrorPage;