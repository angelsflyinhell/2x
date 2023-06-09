"use client";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");

  function parseText(text: string) {
    const words = text.split(" ");

    for (let i = 0; i < words.length; i++) {
      const ptr = words[i].length / 2;
      const first_half = words[i].slice(0, ptr);
      const second_half = words[i].slice(ptr, words[i].length);

      words[i] = "<b>" + first_half + "</b>" + second_half;
    }
    setText(words.join(" "));
  }

  return (
    <>
      <div className="bg-white min-h-screen h-full w-full text-black p-8">
        <h1 className="text-9xl text-center font-bold pt-12">2x</h1>
        <div className="flex justify-center items-center mt-12">
          <input
            className="h-12 w-full max-w-lg border-2 border-gray-100 rounded-lg text-center text-2xl"
            type="text"
            placeholder="paste text here"
            id="input"
            onChange={(e) => parseText(e.target.value)}
          />
        </div>
        <div className="flex justify-center">
          <div className="flex text-left max-w-xl">
            <div
              dangerouslySetInnerHTML={{ __html: text }}
              className="pt-8"
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
