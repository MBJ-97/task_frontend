import React from "react";

export default function Footer() {
  return (
    <footer className="h-20 mt-16 bg-emerald-500">
      <p className=" pt-8 flex items-center justify-center">
        Made with {"<3"} by &nbsp;{" "}
        <a
          href="https://www.linkedin.com/in/mahdi-beldjoudi-5b1913115/"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          {" "}
          Mahdi Beldjoudi
        </a>
      </p>
    </footer>
  );
}
