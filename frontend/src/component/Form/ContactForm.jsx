import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiMap,
  FiMessageSquare,
} from "react-icons/fi";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        data,
        process.env.REACT_APP_USER_ID
      );
      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again.");
    }
  };

  const inputClasses = `
    w-full px-4 py-3 rounded-lg border bg-white
    focus:outline-none focus:ring-2 focus:ring-blue-500
    transition-all duration-200
    ${errors ? "border-red-300" : "border-gray-200"}
  `;

  const labelClasses =
    "flex items-center text-sm font-medium text-gray-700 mb-2";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className={labelClasses}>
            <FiUser className="w-4 h-4 mr-2 text-gray-400" />
            Full Name
          </label>
          <input
            id="name"
            type="text"
            className={inputClasses}
            placeholder="John Doe"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 2,
                message: "Name must be at least 2 characters",
              },
            })}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className={labelClasses}>
            <FiMail className="w-4 h-4 mr-2 text-gray-400" />
            Email Address
          </label>
          <input
            id="email"
            type="email"
            className={inputClasses}
            placeholder="you@example.com"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: "Please enter a valid email",
              },
            })}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className={labelClasses}>
          <FiMessageSquare className="w-4 h-4 mr-2 text-gray-400" />
          Your Message
        </label>
        <textarea
          id="message"
          className={`${inputClasses} resize-none h-32`}
          placeholder="How can we help you?"
          {...register("message", {
            required: "Message is required",
            minLength: {
              value: 10,
              message: "Message must be at least 10 characters",
            },
          })}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      {/* Terms and Submit */}
      <div className="space-y-4">
        <p className="text-sm text-gray-500">
          By submitting this form, you agree to our{" "}
          <a href="#" className="text-blue-600 hover:underline">
            terms of service
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-600 hover:underline">
            privacy policy
          </a>
          .
        </p>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg
            font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 
            focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200
            disabled:opacity-50 disabled:cursor-not-allowed
            flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
