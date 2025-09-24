import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Linkedin,
  Github,
} from "lucide-react";

/* ---------------------- Reusable Components ---------------------- */

interface ContactItemProps {
  icon: React.ElementType;
  label: string;
  value: string;
  link?: string;
}
const ContactItem: React.FC<ContactItemProps> = ({
  icon: Icon,
  label,
  value,
  link,
}) => (
  <div className="flex items-center gap-4 group">
    <div className="w-12 h-12 circle-primary flex items-center justify-center group-hover:animate-pulse-glow transition-all duration-300">
      <Icon className="w-6 h-6 text-white" />
    </div>
    <div>
      <p className="text-sm text-muted-foreground">{label}</p>
      {link ? (
        <a
          href={link}
          className="text-foreground font-medium hover:text-primary transition-colors duration-300"
        >
          {value}
        </a>
      ) : (
        <p className="text-foreground font-medium">{value}</p>
      )}
    </div>
  </div>
);

interface SocialButtonProps {
  icon: React.ElementType;
  url: string;
  color: string;
}
const SocialButton: React.FC<SocialButtonProps> = ({
  icon: Icon,
  url,
  color,
}) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className={`group relative w-14 h-14 ${color} rounded-2xl flex items-center justify-center hover-glow transition-all duration-300`}
  >
    <Icon className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
  </a>
);

interface StatusCardProps {
  available: boolean;
  message: string;
}
const StatusCard: React.FC<StatusCardProps> = ({ available, message }) => (
  <div className="mt-8 glass-card p-6 rounded-2xl">
    <div className="flex items-center gap-3 mb-3">
      <div
        className={`w-3 h-3 rounded-full animate-pulse ${
          available ? "bg-success" : "bg-muted"
        }`}
      ></div>
      <span className="text-foreground font-semibold">
        {available ? "Available for New Projects" : "Currently Unavailable"}
      </span>
    </div>
    <p className="text-sm text-muted-foreground">{message}</p>
  </div>
);

interface ContactFormProps {
  onSubmit: (data: FormDataShape) => Promise<void>;
  isSubmitting: boolean;
  isSubmitted: boolean;
  formData: FormDataShape;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}
interface FormDataShape {
  name: string;
  email: string;
  subject: string;
  message: string;
}
const ContactForm: React.FC<ContactFormProps> = ({
  onSubmit,
  isSubmitting,
  isSubmitted,
  formData,
  onChange,
}) => (
  <div className="glass-card p-8 rounded-3xl">
    <h3 className="text-2xl font-bold text-foreground mb-6">Send Message</h3>

    {isSubmitted ? (
      <div className="text-center py-12">
        <div className="w-16 h-16 circle-primary mx-auto mb-6 flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-white" />
        </div>
        <h4 className="text-xl font-bold text-foreground mb-2">
          Message Sent!
        </h4>
        <p className="text-muted-foreground">
          Thank you for reaching out. I'll get back to you soon.
        </p>
      </div>
    ) : (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(formData);
        }}
        className="space-y-6"
      >
        {/* Name & Email */}
        <div className="grid md:grid-cols-2 gap-4">
          <FormInput
            id="name"
            name="name"
            label="Full Name"
            value={formData.name}
            onChange={onChange}
            placeholder="Your name"
          />
          <FormInput
            id="email"
            name="email"
            type="email"
            label="Email Address"
            value={formData.email}
            onChange={onChange}
            placeholder="your.email@example.com"
          />
        </div>

        <FormInput
          id="subject"
          name="subject"
          label="Subject"
          value={formData.subject}
          onChange={onChange}
          placeholder="Project inquiry, collaboration, etc."
        />

        <FormTextarea
          id="message"
          name="message"
          label="Message"
          value={formData.message}
          onChange={onChange}
          placeholder="Tell me about your project, requirements, timeline, etc."
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-primary text-white py-4 rounded-xl font-semibold hover-lift transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Send className="w-5 h-5" />
            </>
          )}
        </button>
      </form>
    )}
  </div>
);

// Small reusable input & textarea components
interface FieldProps {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  placeholder?: string;
  type?: string;
}
const FormInput: React.FC<FieldProps> = ({
  id,
  name,
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}) => (
  <div>
    <label
      htmlFor={id}
      className="block text-sm font-medium text-foreground mb-2"
    >
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      required
      className="w-full px-4 py-3 bg-surface border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
      placeholder={placeholder}
    />
  </div>
);

const FormTextarea: React.FC<FieldProps> = ({
  id,
  name,
  label,
  value,
  onChange,
  placeholder,
}) => (
  <div>
    <label
      htmlFor={id}
      className="block text-sm font-medium text-foreground mb-2"
    >
      {label}
    </label>
    <textarea
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      required
      rows={5}
      className="w-full px-4 py-3 bg-surface border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 resize-none"
      placeholder={placeholder}
    ></textarea>
  </div>
);

/* ---------------------- Main Contact Section ---------------------- */

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormDataShape>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (data: FormDataShape) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const mailtoLink = `mailto:yumnaataba33@gmail.com?subject=${encodeURIComponent(
      data.subject
    )}&body=${encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
    )}`;
    window.open(mailtoLink);

    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "yumnaataba33@gmail.com",
      link: "mailto:yumnaataba33@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+963 962 881 645",
      link: "tel:+963962881645",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Damascus, Syrian Arab Republic",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/in/yumna-ataba-b263802aa",
      color: "bg-gradient-primary",
    },
    {
      icon: Github,
      url: "https://github.com/YumnaAtaba3",
      color: "bg-gradient-secondary",
    },
    {
      icon: Mail,
      url: "mailto:yumnaataba33@gmail.com",
      color: "bg-gradient-accent",
    },
  ];

  return (
    <section id="contact" className="section-spacing bg-surface">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-display gradient-text mb-6">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let’s discuss your project and
            create something amazing together. I’m always excited to work on new
            challenges.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Let's Connect
            </h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, i) => (
                <ContactItem key={i} {...info} />
              ))}
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-foreground">
                Follow Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, i) => (
                  <SocialButton key={i} {...social} />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Feel free to reach out through any of these platforms. I
                typically respond within 24 hours and I'm always happy to
                discuss new opportunities or answer any questions you might
                have.
              </p>
            </div>

            <StatusCard
              available={true}
              message="Currently accepting freelance projects and full-time opportunities.
              Let's discuss how I can help bring your vision to life."
            />
          </div>

          {/* Right Column - Form */}
          <div className="animate-scale-in">
            <ContactForm
              onSubmit={handleSubmit}
              isSubmitting={isSubmitting}
              isSubmitted={isSubmitted}
              formData={formData}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
