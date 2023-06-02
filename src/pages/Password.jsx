import { useState } from 'react';
import vector from '../Vector.png'

const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <input
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full py-2 pl-4 pr-12 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Password"
      />
      <button
        type="button"
        className="absolute inset-y-0 right-0 px-3 flex items-center justify-center focus:outline-none"
        onClick={handleTogglePassword}
      >
        <img
          src={showPassword ? vector : vector}
          alt={showPassword ? 'Hide Password' : 'Show Password'}
          className="h-3 w-4 bg-white "
        />
      </button>
    </div>
  );
};

export default PasswordInput;
