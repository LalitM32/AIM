import React from 'react';

interface FormInputProps {
  icon?: React.ReactNode;
  type: string;
  label: string;
  placeholder?: string;
  required?: boolean;
}

export default function FormInput({ icon, type, label, placeholder, required }: FormInputProps) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}</label>
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-3 flex items-center text-cream/60">
            {icon}
          </div>
        )}
        <input
          type={type}
          placeholder={placeholder}
          required={required}
          className={`w-full bg-deep-black/50 border border-cream/20 rounded px-4 py-2
                     focus:outline-none focus:border-cream/40 transition-colors
                     ${icon ? 'pl-10' : ''}`}
        />
      </div>
    </div>
  );
}