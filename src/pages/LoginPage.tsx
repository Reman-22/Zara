import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [touched, setTouched] = useState(false);
  const navigate = useNavigate();
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const handleContinue = () => {
    setTouched(true);
    if (isValid) navigate('/');
  };
  return (
    <section className="flex min-h-screen flex-col md:flex-row">
      <div className="flex min-h-screen w-full flex-col justify-center bg-white p-8 md:w-1/2 md:p-16">
        <Link to="/" className="mb-16 text-4xl font-extralight tracking-cinematic md:text-5xl">ARTISAN</Link>
        <div className="max-w-md">
          <h1 className="mb-8 text-lg tracking-cinematic">LOG IN OR REGISTER</h1>
          <input value={email} onBlur={() => setTouched(true)} onChange={(event) => setEmail(event.target.value)} placeholder="EMAIL" className={`w-full rounded-full border px-6 py-4 text-sm tracking-cinematic outline-none transition-colors ${touched && !isValid ? 'border-red-500' : 'border-gray-200 focus:border-black'}`} />
          {touched && !isValid && <p className="mt-3 text-[10px] tracking-cinematic text-red-500">ENTER A VALID EMAIL</p>}
          <button onClick={handleContinue} disabled={!isValid} className="mt-6 w-full rounded-full bg-blue-600 py-4 text-xs tracking-cinematic text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-200">CONTINUE</button>
          <p className="mb-6 mt-12 text-[10px] tracking-cinematic text-gray-400">ACCESS WITH</p>
          {['CONTINUE WITH QR', 'CONTINUE WITH GOOGLE', 'CONTINUE WITH APPLE'].map((label) => <button key={label} className="mb-3 w-full rounded-full border border-gray-200 py-3 text-xs tracking-cinematic hover:border-black">{label}</button>)}
        </div>
      </div>
      <div className="hidden w-1/2 bg-gray-100 md:block"><img src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=1200&q=80" alt="Craft" className="h-full w-full object-cover" /></div>
    </section>
  );
}