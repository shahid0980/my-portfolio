import { useState, type FormEvent, type ChangeEvent } from "react";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiPhone, FiSend, FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const contactInfo = [
  {
    icon: FiMail,
    label: "Email",
    value: "khans0980@gmail.com",
    href: "mailto:khans0980@gmail.com",
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: "Odisha, India",
    description: "Available for remote work worldwide",
  },
  {
    icon: FiPhone,
    label: "Phone",
    value: "+91 9337633755",
    href: "tel:+919337633755",
  },
];

const socialLinks = [
  { icon: FiGithub, href: "https://github.com/shahid0980", label: "GitHub" },
  { icon: FiLinkedin, href: "https://www.linkedin.com/in/shahid-khan-073157157/", label: "LinkedIn" },
  { icon: FiInstagram, href: "https://www.instagram.com/shahid_khan__0980/", label: "Instagram" },
];

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thanks for reaching out! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-medium tracking-wider uppercase">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto text-lg">
            Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map(({ icon: Icon, label, value, href, description }) => (
              <div
                key={label}
                className="glass-card p-6 border border-primary/10 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 text-primary-light">
                    <Icon size={22} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-1">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="text-lg font-semibold text-white hover:text-primary-light transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-lg font-semibold text-white">{value}</p>
                    )}
                    {description && (
                      <p className="text-sm text-slate-500 mt-1">{description}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="glass-card p-6 border border-primary/10">
              <p className="text-sm text-slate-500 mb-4">Follow me on</p>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-surface-card border border-primary/15 flex items-center justify-center text-slate-400 hover:text-primary-light hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all"
                    aria-label={label}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 glass-card p-8 border border-primary/10"
          >
            <div className="grid md:grid-cols-2 gap-5 mb-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-400 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-xl bg-surface-card border border-primary/15 text-white placeholder-slate-500 focus:outline-none focus:border-primary/50 focus:shadow-lg focus:shadow-primary/10 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-400 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-xl bg-surface-card border border-primary/15 text-white placeholder-slate-500 focus:outline-none focus:border-primary/50 focus:shadow-lg focus:shadow-primary/10 transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="mb-5">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-slate-400 mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-5 py-4 rounded-xl bg-surface-card border border-primary/15 text-white placeholder-slate-500 focus:outline-none focus:border-primary/50 focus:shadow-lg focus:shadow-primary/10 transition-all"
                placeholder="Project Inquiry"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-400 mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-5 py-4 rounded-xl bg-surface-card border border-primary/15 text-white placeholder-slate-500 focus:outline-none focus:border-primary/50 focus:shadow-lg focus:shadow-primary/10 transition-all resize-none"
                placeholder="Tell me about your project, timeline, and budget..."
              />
            </div>

            <button
              type="submit"
              className="group w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl btn-gradient text-white font-medium text-lg"
            >
              <FiSend size={20} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
              <span>Send Message</span>
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
