import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a3ple7j",    // e.g., "service_xyz123"
        "template_gzl2h5c",   // e.g., "template_abc456"
        form.current,
        "D6RI35LSvjtHhNpmW"     // e.g., "jskZ123abcDEF"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!", {
            position: "top-center",
            autoClose: 3000,
          });
          e.target.reset();
        },
        (error) => {
          console.error(error.text);
          toast.error("Failed to send message. Try again.", {
            position: "top-center",
            autoClose: 3000,
          });
        }
      );
  };

  return (
    <section className="min-h-screen bg-white text-gray-800 py-16 px-6">
      <ToastContainer />
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-2">Contact Me</h2>
          <p className="text-gray-600">
            Let's get in touch! Send me a message or connect via social links below.
          </p>
        </div>

        {/* Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-gray-100 p-8 rounded-lg shadow-md space-y-6"
        >
          <div>
            <label htmlFor="name" className="block mb-2 font-semibold">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="w-full px-4 py-2 rounded-md bg-white  border border-gray-300  text-gray-800  focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-semibold">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="your@email.com"
              className="w-full px-4 py-2 rounded-md bg-white border border-gray-300 dark:border-gray-600 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 font-semibold">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              required
              placeholder="Your message"
              className="w-full px-4 py-2 rounded-md bg-white border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>

        {/* Social Links */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-4">Connect with Me</h3>
          <div className="flex justify-center gap-6 text-2xl">
            <a
              href="https://www.linkedin.com/in/Irtaza-ahmad-848652276"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/eezy-10"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-700"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:ahmadirtaza10@gmail.com"
              className="hover:text-red-500"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}