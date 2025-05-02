import React from 'react';

interface FormTextAreaProps {
  label: string;
  placeholder?: string;
  required?: boolean;
}

export default function FormTextArea({ label, placeholder, required }: FormTextAreaProps) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}</label>
      <textarea
        placeholder={placeholder}
        required={required}
        rows={4}
        className="w-full bg-deep-black/50 border border-cream/20 rounded px-4 py-2
                   focus:outline-none focus:border-cream/40 transition-colors"
      />
    </div>
  );
}