import { Helmet } from 'react-helmet-async';

import { useNavigate } from 'react-router-dom';

import { CONFIG } from 'src/config-global';

import { SignInView } from 'src/sections/auth';

// ----------------------------------------------------------------------

export default function Page() {
  const navigate = useNavigate();

 const handleSignInSuccess = () => {
    console.log("Sign-in successful!");
    navigate('/');
  };
  return (
    <>
      <Helmet>
        <title> {`Sign in - ${CONFIG.appName}`}</title>
      </Helmet>

      <SignInView onSignInSuccess={handleSignInSuccess} />
      </> 
  );
}
