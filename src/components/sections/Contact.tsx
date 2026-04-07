import { useState, type FormEvent, type ChangeEvent } from "react";
import { motion } from "framer-motion";
import { FiSend, FiArrowUpRight } from "react-icons/fi";
import { contactInfo, socialLinks } from "../../data/personalDetails";



interface FormData {
  name: string;
  email: string;
  message: string;
}



export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thanks for reaching out! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 px-6 lg:px-12 border-t dark-border dark-bg">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-label dark-text-muted mb-4">— IO_006_CONTACT</p>
            <h2 className="text-3xl md:text-4xl font-bold dark-text-primary mb-6 leading-tight">
              Let's work together.
            </h2>
            <p className="dark-text-secondary mb-12 leading-relaxed">
              Have a project in mind? I'd love to hear about it. Send me a message
              and let's create something great.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map(({ label, value, href }) => (
                <div key={label} className="flex items-center justify-between py-4 border-b dark-border">
                  <span className="text-label dark-text-muted">{label}</span>
                  {href ? (
                    <a href={href} className="text-sm font-medium dark-text-primary dark:hover:text-gray-400 transition-colors flex items-center gap-2">
                      {value}
                      <FiArrowUpRight size={12} />
                    </a>
                  ) : (
                    <span className="text-sm font-medium dark-text-primary">{value}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <p className="text-label dark-text-muted mb-4">FOLLOW_ME</p>
              <div className="flex gap-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border dark-border flex items-center justify-center dark-text-muted hover:dark-text-primary hover:border-current transition-all"
                    aria-label={label}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="lg:border-l lg:dark-border lg:pl-16"
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-label dark-text-muted mb-3">
                  YOUR_NAME
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full py-4 border-b dark-border focus:border-black dark:focus:border-white bg-transparent dark-text-primary placeholder-gray-300 dark:placeholder-gray-600 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-label dark-text-muted mb-3">
                  YOUR_EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full py-4 border-b dark-border focus:border-black dark:focus:border-white bg-transparent dark-text-primary placeholder-gray-300 dark:placeholder-gray-600 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-label dark-text-muted mb-3">
                  YOUR_MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full py-4 border-b dark-border focus:border-black dark:focus:border-white bg-transparent dark-text-primary placeholder-gray-300 dark:placeholder-gray-600 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="btn-primary inline-flex items-center gap-2 mt-4"
              >
                SEND_MESSAGE
                <FiSend size={14} />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
