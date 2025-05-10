"use client";
import React, { useState } from "react";
import { submitUserQuery } from "../../lib/supabase";

const ContactFrom = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const result = await submitUserQuery(formData);

      if (result.success) {
        setStatus({
          type: "success",
          message: "Thank you for your message. We will get back to you soon!",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      console.log(error);
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Name
        </label>
        <input
          type="text"
          name="name"
          className="w-full p-3 border border-gray-300 focus:border-brand focus:outline-none"
          placeholder="Your full name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          className="w-full p-3 border border-gray-300 focus:border-brand focus:outline-none"
          placeholder="Your email address"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Phone
        </label>
        <input
          type="tel"
          name="phone"
          className="w-full p-3 border border-gray-300 focus:border-brand focus:outline-none"
          placeholder="Your phone number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Message
        </label>
        <textarea
          name="message"
          className="w-full p-3 border border-gray-300 focus:border-brand focus:outline-none h-32"
          placeholder="Tell us about your preferred destination, dates, and any specific requirements"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>

      {status.message && (
        <div
          className={`p-4 rounded ${
            status.type === "success"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {status.message}
        </div>
      )}

      <button
        disabled={loading}
        className={`bg-brand px-8 py-3 text-white w-full cursor-pointer ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactFrom;
