"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [randNum, setRandNum] = useState("");
  const [howHum, setHowNum] = useState(5);
  const [howmutch, setHowMutch] = useState(48);

  const generateRandomNumbers = () => {
    const generateUniqueNumbers = () => {
      let numbers = [];
      while (numbers.length < 6) {
        const randomNum = Math.floor(Math.random() * howmutch) + 1;
        if (!numbers.includes(randomNum)) {
          numbers.push(randomNum);
        }
      }
      return numbers;
    };

    let newRandomNumbers = [];
    for (let i = 0; i < howHum; i++) {
      newRandomNumbers.push(generateUniqueNumbers().join(", "));
    }
    setRandNum(newRandomNumbers.join("\n"));
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(randNum)
      .then(() => {
        alert("성공적으로 복사 되었습니다.");
      })
      .catch((err) => {
        console.error("에러: ", err);
      });
  };

  return (
    <main className="h-screen flex flex-col">
      <nav className="h-12 w-full bg-slate-200 px-4 flex items-center text-lg font-bold">
        자동 숫자 생성
      </nav>
      <div className="w-full flex-1 bg-slate-400 flex justify-center items-center">
        <div className="w-2/3 h-2/3 bg-white rounded-md shadow-lg overflow-hidden p-24">
          <div className="flex items-center space-x-2">
            <p>줄수:</p>
            <input
              value={howHum}
              onChange={(e) => {
                setHowNum(e.target.value);
              }}
              type="number"
              className="border border-gray-400 w-14"
            ></input>
            최대 숫자:
            <input
              value={howmutch}
              onChange={(e) => {
                setHowMutch(e.target.value);
              }}
              type="number"
              className="border border-gray-400 w-14"
            ></input>
            <button
              className="bg-blue-400 text-white px-2 py-1 rounded-md my-4"
              onClick={() => {
                generateRandomNumbers();
              }}
            >
              번호 뽑기
            </button>
            <button
              className="bg-gray-400 text-white px-2 py-1 rounded-md my-4"
              onClick={() => {
                copyToClipboard();
              }}
            >
              클립보드로 복사
            </button>
          </div>
          <textarea
            className="w-full h-full rounded-md border border-gray-500"
            value={randNum}
            onChange={(e) => {
              setRandNum(e.target.value);
            }}
          ></textarea>
        </div>
      </div>
    </main>
  );
}
