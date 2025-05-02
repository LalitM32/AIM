import React, { useState } from 'react';
import { Mail, Phone, Building2, MapPin, Briefcase, Wallet } from 'lucide-react';
import FormInput from './FormInput';
import FormTextArea from './FormTextArea';
import emailjs from 'emailjs-com';

interface ContactFormProps {
  type?: 'general' | 'franchise' | 'career';
}

export default function ContactForm({ type = 'general' }: ContactFormProps) {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    companyName: '',
    location: '',
    budget: '',
    position: '',
    message: '',
  });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      email: formData.email,
      phone: formData.phone,
      companyName: formData.companyName,
      location: formData.location,
      budget: formData.budget,
      position: formData.position,
      message: formData.message,
    };

    // EmailJS Credentials (provided)
    const serviceId = "service_lhqmpgc";
    const templateId = "template_gq62cfn";
    const userId = "FjnsZySgUH7Gqhq7Y";

    emailjs.send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('Message sent successfully!');
      }, (err) => {
        console.error('FAILED...', err);
        setStatus('Failed to send message. Please try again.');
      });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FormInput
        icon={<Mail />}
        type="email"
        label="Email"
        placeholder="your@email.com"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <FormInput
        icon={<Phone />}
        type="tel"
        label="Phone"
        placeholder="+91 98765 43210"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        required
      />

      {type === 'franchise' && (
        <>
          <FormInput
            icon={<Building2 />}
            type="text"
            label="Company Name"
            placeholder="Your Company Name"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
          />
          <FormInput
            icon={<MapPin />}
            type="text"
            label="Preferred Location"
            placeholder="City, State"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
          <FormInput
            icon={<Wallet />}
            type="text"
            label="Investment Budget"
            placeholder="Expected Investment Range"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            required
          />
        </>
      )}

      {type === 'career' && (
        <>
          <FormInput
            icon={<Briefcase />}
            type="text"
            label="Position"
            placeholder="Desired Position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
          />
          <FormInput
            icon={<MapPin />}
            type="text"
            label="Preferred Location"
            placeholder="City, State"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </>
      )}

      <FormTextArea
        label="Message"
        placeholder={
          type === 'franchise' 
            ? "Tell us about your business experience and why you're interested in our franchise."
            : type === 'career'
            ? "Tell us about your experience and why you'd like to join our team."
            : 'How can we help you?'
        }
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
      />

      <button
        type="submit"
        className="w-full px-8 py-3 bg-cream text-deep-black font-semibold rounded hover:bg-opacity-90 transition-all"
      >
        {type === 'franchise' 
          ? 'Request Information'
          : type === 'career'
          ? 'Submit Application'
          : 'Send Message'}
      </button>

      {status && <p className="text-center text-red-500">{status}</p>}
    </form>
  );
}
