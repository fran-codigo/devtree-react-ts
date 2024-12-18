import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import ErrorMessage from '../components/ErrorMessage';

export default function RegisterView() {
  const initialValues = {
    name: '',
    email: '',
    handle: '',
    password: '',
    password_confirmation: '',
  };

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });

  const handleRegister = () => {
    console.log('desde handle register');
  };

  return (
    <>
      <h1 className="text-4xl text-white font-bold">Crear Cuenta</h1>

      <form
        onSubmit={handleSubmit(handleRegister)}
        className="bg-white px-5 py-20 rounded-lg space-y-10 mt-10"
      >
        <div className="grid grid-cols-1 space-y-3">
          <label
            htmlFor="name"
            className="text-2xl text-slate-500"
          >
            Nombre
          </label>
          <input
            id="name"
            type="text"
            placeholder="Tu Nombre"
            {...register('name', {
              required: 'El nombre es obligatorio',
            })}
            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
          />

          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </div>
        <div className="grid grid-cols-1 space-y-3">
          <label
            htmlFor="email"
            className="text-2xl text-slate-500"
          >
            E-mail
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email de Registro"
            {...register('email', {
              required: 'El email es obligatorio',
            })}
            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
          />

          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </div>
        <div className="grid grid-cols-1 space-y-3">
          <label
            htmlFor="handle"
            className="text-2xl text-slate-500"
          >
            Handle
          </label>
          <input
            id="handle"
            type="text"
            placeholder="Nombre de usuario: sin espacios"
            {...register('handle', {
              required: 'El handle es obligatorio',
            })}
            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
          />

          {errors.handle && (
            <ErrorMessage>{errors.handle.message}</ErrorMessage>
          )}
        </div>
        <div className="grid grid-cols-1 space-y-3">
          <label
            htmlFor="password"
            className="text-2xl text-slate-500"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password de Registro"
            {...register('password', {
              required: 'La contraseña es obligatoria',
            })}
            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
          />

          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
        </div>

        <div className="grid grid-cols-1 space-y-3">
          <label
            htmlFor="password_confirmation"
            className="text-2xl text-slate-500"
          >
            Repetir Password
          </label>
          <input
            id="password_confirmation"
            type="password"
            placeholder="Repetir Password"
            {...register('password_confirmation', {
              required: 'Confirma tu contraseña',
            })}
            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
          />

          {errors.password_confirmation && (
            <ErrorMessage>{errors.password_confirmation.message}</ErrorMessage>
          )}
        </div>

        <input
          type="submit"
          className="bg-cyan-400 p-3 text-lg w-full uppercase text-slate-600 rounded-lg font-bold cursor-pointer"
          value="Crear Cuenta"
        />
      </form>

      <nav className="mt-10">
        <Link
          to="/auth/login"
          className="text-center text-white text-lg block"
        >
          ¿Ya tienes cuenta? Inicia Sesión
        </Link>
      </nav>
    </>
  );
}
