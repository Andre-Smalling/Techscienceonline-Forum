import React from "react"

export default function FooterComponent() {
  return (
    <div
      className="inline-flex flex-col space-y-2.5 items-start justify-end w-72 h-12 mt-7"
      style={{ marginLeft: "76rem", width: "auto" }}
    >
      <div className="inline-flex space-x-2.5 items-center justify-end w-full h-5">
        <p className="w-12 h-full text-base leading-normal text-gray-400">
          Home
        </p>
        <p className="w-16 h-full text-base leading-normal text-gray-400">
          About
        </p>
        <p className="w-1/5 h-full text-base leading-normal text-gray-400">
          Contact
        </p>
        <p className="w-11 h-full text-base leading-normal text-gray-400">
          FAQs
        </p>
        <p className="w-11 h-full text-base leading-normal text-gray-400">
          Blog
        </p>
      </div>
      <p className="w-48 h-5 text-sm leading-tight text-gray-400">
        © 2021 Techscienceonline.
      </p>
    </div>
  )
}
