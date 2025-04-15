"use client"

import { motion } from "framer-motion"

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Contact <span className="text-blue-600">Us!</span>
        </h1>

        <p className="mt-3 text-2xl">Let's get in touch!</p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <motion.div
            className="bg-white border-8 border-black p-8 shadow-brutal dark:bg-gray-800 dark:text-white dark:border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold">Contact Form</h2>
            <p className="mt-3 text-xl">Fill out the form below to get in touch.</p>
            <form className="flex flex-col mt-4">
              <label htmlFor="name" className="text-left">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="border-2 border-gray-300 p-2 rounded-md dark:bg-gray-700 dark:border-gray-500 dark:text-white"
              />
              <label htmlFor="email" className="text-left mt-2">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border-2 border-gray-300 p-2 rounded-md dark:bg-gray-700 dark:border-gray-500 dark:text-white"
              />
              <label htmlFor="message" className="text-left mt-2">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="border-2 border-gray-300 p-2 rounded-md dark:bg-gray-700 dark:border-gray-500 dark:text-white"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
              >
                Submit
              </button>
            </form>
          </motion.div>

          <motion.div
            className="bg-black text-white border-8 border-black p-8 shadow-brutal-inverse dark:bg-gray-900 dark:border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold">Other Ways to Reach Us</h2>
            <p className="mt-3 text-xl">You can also reach us through the following channels:</p>
            <ul className="mt-4">
              <li>Email: example@example.com</li>
              <li>Phone: 123-456-7890</li>
              <li>Address: 123 Main St, Anytown USA</li>
            </ul>
          </motion.div>
        </div>
      </main>
    </div>
  )
}
