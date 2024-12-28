import React, { useState } from 'react';
import { Mail } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('idle');

    try {
      throw new Error('Form submission failed');
    } catch (error) {
      setSubmitStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const mailtoLink = `mailto:infojp@ayonix.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;

  const inputClasses = "mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500";
  const labelClasses = "block text-sm font-medium text-gray-200";

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className={labelClasses}>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={inputClasses}
            required
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClasses}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={inputClasses}
            required
          />
        </div>
        <div>
          <label htmlFor="subject" className={labelClasses}>Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={inputClasses}
            required
          />
        </div>
        <div>
          <label htmlFor="message" className={labelClasses}>Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className={inputClasses}
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </div>
      </form>

      {submitStatus === 'error' && (
        <div className="mt-4 p-4 bg-gray-800 rounded-md">
          <p className="text-gray-300 mb-3">
            Unable to send message directly. Please click below to send via email:
          </p>
          <a
            href={mailtoLink}
            className="inline-flex items-center text-blue-400 hover:text-blue-300"
          >
            <Mail className="w-5 h-5 mr-2" />
            Send via Email
          </a>
        </div>
      )}

      {submitStatus === 'success' && (
        <div className="mt-4 p-4 bg-green-900 rounded-md">
          <p className="text-green-200">
            Message sent successfully! We'll get back to you soon.
          </p>
        </div>
      )}
    </div>
  );
};

export default ContactForm;