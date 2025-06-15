
import React, { useEffect, useState } from "react";

const LAUNCH_DATE = new Date("2025-07-20T22:45:00+06:00"); // Bangladesh Time

const getTimeDiff = () => {
  const now = new Date();
  const total = LAUNCH_DATE.getTime() - now.getTime();
  const days = Math.max(0, Math.floor(total / (1000 * 60 * 60 * 24)));
  const hours = Math.max(0, Math.floor((total / (1000 * 60 * 60)) % 24));
  const minutes = Math.max(0, Math.floor((total / (1000 * 60)) % 60));
  const seconds = Math.max(0, Math.floor((total / 1000) % 60));
  return { days, hours, minutes, seconds, expired: total <= 0 };
};

const CountdownSection: React.FC = () => {
  const [time, setTime] = useState(getTimeDiff());

  useEffect(() => {
    if (time.expired) return;
    const interval = setInterval(() => setTime(getTimeDiff()), 1000);
    return () => clearInterval(interval);
  }, [time.expired]);

  return (
    <section className="mx-auto max-w-2xl rounded-3xl px-2 sm:px-4 py-8 sm:py-10 mb-10 bg-gradient-to-br from-[#fcfbf7] to-[#f4fafd] shadow-lg text-center font-nunito overflow-x-hidden">
      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#00AEEF] mb-2 flex items-center justify-center gap-2">
        <span role="img" aria-label="hourglass">⏳</span> Pawket Mobile App Launching In:
      </div>
      <div className="font-poppins flex flex-wrap justify-center items-center gap-1 sm:gap-2 md:gap-4 text-base sm:text-2xl md:text-3xl font-semibold my-6 max-w-full w-full min-w-0 mx-auto overflow-x-auto">
        <span className="bg-white rounded-xl shadow px-2 sm:px-3 md:px-4 py-2 sm:py-2 w-16 sm:w-20 md:w-24 text-center flex-shrink-0 min-w-0">
          {String(time.days).padStart(2, "0")}
          <span className="block text-xs sm:text-sm font-normal text-gray-400">Days</span>
        </span>
        <span className="text-xl sm:text-2xl text-gray-400">:</span>
        <span className="bg-white rounded-xl shadow px-2 sm:px-3 md:px-4 py-2 sm:py-2 w-16 sm:w-20 md:w-24 text-center flex-shrink-0 min-w-0">
          {String(time.hours).padStart(2, "0")}
          <span className="block text-xs sm:text-sm font-normal text-gray-400">Hours</span>
        </span>
        <span className="text-xl sm:text-2xl text-gray-400">:</span>
        <span className="bg-white rounded-xl shadow px-2 sm:px-3 md:px-4 py-2 sm:py-2 w-16 sm:w-20 md:w-24 text-center flex-shrink-0 min-w-0">
          {String(time.minutes).padStart(2, "0")}
          <span className="block text-xs sm:text-sm font-normal text-gray-400">Minutes</span>
        </span>
        <span className="text-xl sm:text-2xl text-gray-400">:</span>
        <span className="bg-white rounded-xl shadow px-2 sm:px-3 md:px-4 py-2 sm:py-2 w-16 sm:w-20 md:w-24 text-center flex-shrink-0 min-w-0">
          {String(time.seconds).padStart(2, "0")}
          <span className="block text-xs sm:text-sm font-normal text-gray-400">Seconds</span>
        </span>
      </div>
      <div className="my-6 text-base sm:text-lg text-[#059] font-nunito">
        Want early access to our app?
      </div>
      <a
        href="https://forms.gle/WhBDKy8DLKqM7XxK8"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block font-poppins bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-base rounded-2xl shadow-md transition-all font-semibold"
      >
        Join Early Access List
      </a>
    </section>
  );
};

export default CountdownSection;

