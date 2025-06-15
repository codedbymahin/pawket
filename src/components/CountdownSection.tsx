
import React, { useEffect, useState } from "react";

const LAUNCH_DATE = new Date("2024-07-20T00:00:00+06:00"); // Adjust as needed

const getTimeDiff = () => {
  const now = new Date();
  const total = LAUNCH_DATE.getTime() - now.getTime();
  const days = Math.max(0, Math.floor(total / (1000 * 60 * 60 * 24)));
  const hours = Math.max(0, Math.floor((total / (1000 * 60 * 60)) % 24));
  const minutes = Math.max(0, Math.floor((total / (1000 * 60)) % 60));
  return { days, hours, minutes, expired: total <= 0 };
};

const CountdownSection: React.FC = () => {
  const [time, setTime] = useState(getTimeDiff());

  useEffect(() => {
    if (time.expired) return;
    const interval = setInterval(() => setTime(getTimeDiff()), 1000 * 5);
    return () => clearInterval(interval);
  }, [time.expired]);

  return (
    <section className="mx-auto max-w-2xl rounded-3xl px-6 py-10 mb-12 bg-gradient-to-br from-[#fcfbf7] to-[#f4fafd] shadow-lg text-center font-nunito">
      <div className="text-3xl md:text-4xl font-bold text-[#00AEEF] mb-2 flex items-center justify-center gap-2">
        <span role="img" aria-label="hourglass">⏳</span> Pawket Mobile App Launching In:
      </div>
      <div className="font-poppins flex justify-center items-center gap-4 text-2xl md:text-3xl font-semibold my-6">
        <span className="bg-white rounded-xl shadow px-4 py-2">{String(time.days).padStart(2, "0")} Days</span>
        <span className="text-xl md:text-2xl text-gray-400">:</span>
        <span className="bg-white rounded-xl shadow px-4 py-2">{String(time.hours).padStart(2, "0")} Hours</span>
        <span className="text-xl md:text-2xl text-gray-400">:</span>
        <span className="bg-white rounded-xl shadow px-4 py-2">{String(time.minutes).padStart(2, "0")} Minutes</span>
      </div>
      <div className="my-6 text-lg text-[#059] font-nunito">
        Want to be the first to try it?
      </div>
      <a
        href="https://forms.gle/WhBDKy8DLKqM7XxK8"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block font-poppins bg-[#00AEEF] hover:bg-[#0099CC] text-white px-8 py-3 text-base rounded-2xl shadow-md transition-all font-semibold"
      >
        Join the Early Access List
      </a>
    </section>
  );
};

export default CountdownSection;
