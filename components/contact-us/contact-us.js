"use client"
import { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";

export const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/sendmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phonenumber, message }),
      });

      const data = await res.json();
      console.log("API Response:", data);
      if (data.success) {
        setStatus('Email sent successfully!');
        setEmailSent(true);
        setName('');
        setEmail('');
        setPhoneNumber('');
        setMessage('');
      } else {
        setStatus(data.message || 'Failed to send email.');
      }
    } catch (err) {
      console.error('Error sending email:', err);
      setStatus('An error occurred. Please try again.');
    }
    setLoading(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSendMore = () => {
    setEmailSent(false);
    setStatus('');
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          We&apos;d love to hear from you!
        </h2>
        <p className="text-lg text-center mb-12 max-w-2xl mx-auto">
          Please leave your message using the form below. We aim to get in touch
          within 24 hours.
        </p>

        {emailSent ? (
          <div className="flex justify-center items-center min-h-[50vh]">
            <div className="bg-white shadow-lg p-8 rounded-lg max-w-md w-full text-center">
              <h3 className="text-2xl font-bold mb-4">Thank you!</h3>
              <p className="mb-6">{status}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" onClick={handleSendMore}>
                  Send Another Message
                </Button>
                <Button onClick={scrollToTop}>
                  Back to Top
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center">
            <div className="bg-white shadow-xl rounded-lg overflow-hidden w-full max-w-4xl border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                {/* Contact Info */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold mb-2">How can we help?</h3>
                    <p className="text-gray-600">
                      Whether you already know what you need or you still need some
                      brainstorming, we&apos;re happy to talk! Our initial consultation is free
                      of charge, with no strings attached.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Image
                        src="/images/img/contact/confirmation.svg"
                        alt="Phone Icon"
                        width={50}
                        height={50}
                        className="mt-1"
                      />
                      <div>+92319 7167 168</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Image
                        src="/images/img/contact/icons8-mailbox.svg"
                        alt="Email Icon"
                        width={50}
                        height={50}
                        className="mt-1"
                      />
                      <div>Support@vveba.com</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Image
                        src="/images/img/contact/message.svg"
                        alt="Address Icon"
                        width={50}
                        height={50}
                        className="mt-1"
                      />
                      <div>
                        Office # 20, Zone/C, 2 Floor, Innovista Technology Zone, DHA
                        Business Hub, DHA Phase 8, Lahore.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div>
                  <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block mb-2 font-medium">
                        Name
                      </label>
                      <Input
                        type="text"
                        id="name"
                        placeholder='Enter name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 font-medium">
                        Email
                      </label>
                      <Input
                        type="email"
                        id="email"
                        placeholder='Enter email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="number" className="block mb-2 font-medium">
                        Phone Number
                      </label>
                      <Input
                        type="text"
                        id="number"
                        placeholder='Enter phone'
                        value={phonenumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block mb-2 font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder='Enter message'
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                      />
                    </div>

                    <Button type="submit"
                      className="w-full bg-[#e92e3e] hover:bg-[#e92e3e] cursor-pointer text-white"
                      disabled={loading}
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <svg
                            className="animate-spin h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Submitting...
                        </span>
                      ) : (
                        'Submit'
                      )}
                    </Button>
                  </form>
                  {status && <p className="mt-4 text-center text-[#e92e3e] font-bold">{status}</p>}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};