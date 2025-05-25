import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';

type ProtectedLinkProps = {
  to: string;
  children: React.ReactNode;
};

const ProtectedLink: React.FC<ProtectedLinkProps> = ({ to, children }) => {
  const { isSignedIn } = useAuth();
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isSignedIn) {//se for false vai para login
      e.preventDefault(); // Impede a navegação para o link
      navigate('/login'); // Redireciona para a página de login
    }else{//se for verdadeiro ele impede a navegação para login
        e.preventDefault();
        navigate('/Adress')
    }
  };

  return (
    <Link to={to} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default ProtectedLink;
