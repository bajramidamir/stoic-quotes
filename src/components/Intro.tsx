import React, { useState, useEffect } from "react";

const Intro = () => {
  const [quote, setQuote] = useState<string>("Welcome to Stoic Quotes");
  const [author, setAuthor] = useState<string>("Damir Bajrami");

  const loadQuote = () => {
    fetch("https://stoic-quotes.com/api/quote")
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.text);
        setAuthor(data.author);
      });
  };

  return (
    <div className="px-6 py-8 md:px-14 md:py-24">
      <blockquote
        id="fader"
        className="rounded duration-1000 p-3 md:p-6 text-gray-300 w-full md:w-1/2 mx-auto"
      >
        <p className=" text-2xl font-semibold text-center mb-12">{quote}</p>
        <footer className="font-medium text-lg">- {author}</footer>
      </blockquote>

      <div className="py-20 font-medium text-lg">
        <button
          onClick={loadQuote}
          className="rounded px-5
          hover:bg-slate-500 duration-300 hover:text-white bg-slate-600 text-gray-300 
            py-3 absolute mx-auto left-0 right-0 top-3/4 w-48 md:w-40 shadow-md"
        >
          New quote
        </button>
      </div>
    </div>
  );
};

export default Intro;
