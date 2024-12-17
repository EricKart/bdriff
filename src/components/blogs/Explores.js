import React from "react";
import { FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { VscRocket } from "react-icons/vsc";
import { FiSearch, FiFilter } from "react-icons/fi";
import bottomLogo from "../../assets/images/Br-logo-new.jpg";
import featurepic from "../../assets/images/feature-pic.jpg";
import guitarfg from "../../assets/images/guitar-fg1.jpg"
import pianofg from "../../assets/images/piano-fg.jpg"
import childfg from "../../assets/images/child-fg.jpg"
import drumfg from "../../assets/images/drums-fg.jpg"
import nodesfg from "../../assets/images/nodes-fg.jpg"
import bandfg from "../../assets/images/bandfg.jpg"
import naturefg from "../../assets/images/naturefg.jpg"
import microfg from "../../assets/images/micro-fg.jpg"
import guitaistfg from "../../assets/images/guitarist-fg.jpg"
import { Link } from "react-router-dom";

export default function Explores() {
  return (
    <div className="bg-black text-white font-sans min-h-screen">
      {/* Header Section */}
      <header className="bg-purple-700 rounded-full p-10 inline-block w-full text-center py-59 bg-gradient-to-b from-[#2B0F3F] to-[#0B0111] relative">
        {/* Search Bar */}
       <div className="flex justify-center items-center mb-8">
          <div className="relative w-full max-w-lg">
           <input
            type="text"
            placeholder="Search"
            className="w-full py-3 pl-5 pr-12 rounded-full bg-[#4D3B5E] text-gray-300 outline-none placeholder-gray-400"
             />
            <div className="absolute top-0 right-0 h-full flex items-center pr-4 space-x-3">
             <FiSearch className="text-gray-400 text-lg cursor-pointer" />
             <FiFilter className="text-gray-400 text-lg cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="mt-10 text-5xl md:text-6xl font-Montserrat">
          <span className="text-white">Beyond</span>
          <span className="text-[#A16EFF]">riffs</span>
          <span
            style={{
              background: "linear-gradient(to bottom, #A16EFF, #FFFFFF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}
          >
            Academy
          </span>
        </h1>
        <p className="mt-4 text-lg opacity-80">
          Unleashing Your Musical Potential Online
        </p>
        <button className="mt-6 bg-[#A14FFF] px-8 py-3 text-lg rounded-full hover:opacity-90 transition duration-300">
          Book free trial
        </button>
      </header>

      {/* Featured Section */}
      <section className="mt-10 px-4 md:px-20">
        <div className="relative w-full h-64 md:h-[500px]">
          {/* Background Image */}
          <img
           src={featurepic}
           alt="Featured Music"
           className="w-full h-full object-cover rounded-lg brightness-75"
          />
         {/* Centered Text Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center rounded-lg p-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-10">
             Music Therapy: Healing the Mind, Body, and Soul
            </h2>
            <p className="text-sm md:text-base text-gray mb-10 opacity-100 max-w-lg">
             Imagine a world without music—a world where melodies don’t lift your spirits, where songs don’t bring memories flooding back, and where rhythms don’t inspire you to move. Sounds dull, doesn’t it? 
            </p>
            <button className="mt-5 bg-purple-600 px-5 py-2 rounded-full text-white hover:opacity-80 transition duration-300">
             Read more
            </button>
          </div>
        </div>
      </section>


        {/* Grid Section */}
        <section className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 px-4 md:px-20">
  {/* Guitar Section */}
  <div className="relative group">
    <Link
              to={"about/individualblog"}
              className="bg-gradient-to-r mt-8 from-custom-purple-1 via-custom-purple-2 to-custom-purple-3 text-white  py-3 px-7 text-xl rounded-2xl hover:opacity-80"
            >
    <img
      src= {guitarfg}
      alt="guitar"
      className="w-full h-52 md:h-64 object-cover rounded-lg brightness-75"
    />

    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg">
      <p className="text-white text-lg font-semibold">Guitar</p>
    </div>
    </Link>
  </div>

  {/* Piano Section */}
  <div className="relative group">
    <img
      src= {pianofg}
      alt="piano"
      className="w-full h-52 md:h-64 object-cover rounded-lg brightness-75"
    />
    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg">
      <p className="text-white text-lg font-semibold">Piano</p>
    </div>
  </div>

  {/* Child Music Section */}
  <div className="relative group">
    <img
      src= {childfg}
      alt="child music"
      className="w-full h-52 md:h-64 object-cover rounded-lg brightness-75"
    />
    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg">
      <p className="text-white text-lg font-semibold">Child Music</p>
    </div>
  </div>

  {/* Drums Section */}
  <div className="relative group">
    <img
      src= {drumfg}
      alt="drums"
      className="w-full h-52 md:h-64 object-cover rounded-lg brightness-75"
    />
    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg">
      <p className="text-white text-lg font-semibold">Drums</p>
    </div>
  </div>

  {/* Notes Section */}
  <div className="relative group">
    <img
      src= {nodesfg}
      alt="nodes"
      className="w-full h-52 md:h-64 object-cover rounded-lg brightness-75"
    />
    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg">
      <p className="text-white text-lg font-semibold">Nodes</p>
    </div>
  </div>

  {/* Band Section */}
  <div className="relative group">
    <img
      src= {bandfg}
      alt="band"
      className="w-full h-52 md:h-64 object-cover rounded-lg brightness-75"
    />
    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg">
      <p className="text-white text-lg font-semibold">Band</p>
    </div>
  </div>

  {/* Nature Music Section */}
  <div className="relative group">
    <img
      src= {naturefg}
      alt="nature music"
      className="w-full h-52 md:h-64 object-cover rounded-lg brightness-75"
    />
    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg">
      <p className="text-white text-lg font-semibold">Nature Music</p>
    </div>
  </div>

  {/* Microphone Section */}
  <div className="relative group">
    <img
      src= {microfg}
      alt="microphone"
      className="w-full h-52 md:h-64 object-cover rounded-lg brightness-75"
    />
    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg">
      <p className="text-white text-lg font-semibold">Microphone</p>
    </div>
  </div>

  {/* Guitarist Section */}
  <div className="relative group">
    <img
      src= {guitaistfg}
      alt="guitarist"
      className="w-full h-52 md:h-64 object-cover rounded-lg brightness-75"
    />
    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 rounded-lg">
      <p className="text-white text-lg font-semibold">Guitarist</p>
    </div>
  </div>
</section>



      {/* Footer Section */}
      <footer className="bg-gradient-to-t from-[#2B0F3F] to-[#0B0111] py-10 text-white">
      {/* Top Section */}
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between gap-10 lg:items-start">
        {/* Navigation Sections */}
        <div className="flex flex-wrap gap-12">
          <div>
            <h3 className="font-semibold mb-4 text-xl">Course</h3>
            <p className="text-xm opacity-60">Instruments</p>
            <p className="text-xm opacity-60">Vocals</p>
            <p className="text-xm opacity-60">Certificates</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-xl">Blogs</h3>
            <p className="text-xm opacity-60">Post</p>
            <p className="text-xm opacity-60">Tips and tricks</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-xl">Support</h3>
            <p className="text-xm opacity-60">Contact us</p>
            <p className="text-xm opacity-60">FAQ</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-xl">Legal</h3>
            <p className="text-xm opacity-60">Privacy</p>
            <p className="text-xm opacity-60">Policy</p>
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="items-center">
          <h2 className="text-5xl font-bold mb-5">Subscribe to our News Letter</h2>
          <p className="text-xs opacity-60 mb-4 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid.
          </p>
          <form className="flex items-left">
            <input
              type="email"
              placeholder="Email"
              className="w-medium p-3 rounded-full bg-[#4D3B5E] text-white placeholder-white text-xs outline-none"
            />
            <button
              type="submit"
              className="ml-2 bg-purple-600 p-3 rounded-full hover:bg-purple-500"
            >
              <VscRocket className="text-white text-lg" />
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t border-[#4D3B5E] pt-6 flex flex-col lg:flex-row justify-between items-center">
        {/* Logo */}
        <div>
          <img src={bottomLogo} alt="Logo" className="h-15 bg-white-900 p-2 rounded-lg" />
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 mt-4 lg:mt-0">
          <FaTwitter className="hover:text-purple-400 cursor-pointer text-lg" />
          <a
            href="https://www.linkedin.com/company/beyondriffs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="hover:text-purple-400 cursor-pointer text-lg" />
          </a>
          <IoLogoTiktok className="hover:text-purple-400 cursor-pointer text-lg" />
          <FaYoutube className="hover:text-purple-400 cursor-pointer text-lg" />
        </div>
      </div>
    </footer>
    </div>
  );
}
