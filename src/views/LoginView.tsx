import { Link } from 'react-router-dom';

export default function LoginView() {
  return (
    <>
      

      <nav>
        <Link to="/auth/registrar">¿No tienes cuenta? Crea una</Link>
      </nav>
    </>
  );
}
