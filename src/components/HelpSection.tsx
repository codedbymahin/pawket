
import React from "react";

const HelpSection: React.FC = () => (
  <section className="max-w-2xl mx-auto bg-gradient-to-br from-[#f8fcfb] to-[#f7fbfd] rounded-3xl p-8 py-12 my-10 shadow-lg text-center font-nunito">
    <h2 className="text-3xl md:text-4xl font-bold text-[#00AEEF] mb-4 flex items-center gap-3 justify-center">
      <span role="img" aria-label="hands-shake">🤝</span>
      Together, We Make Pawket Stronger
    </h2>
    <p className="text-lg text-[#334] mb-8">
      If you’re facing a pet-related challenge or want to offer help to others, let us know below.
    </p>
    <div className="flex flex-col sm:flex-row justify-center gap-5">
      <a
        href="https://forms.gle/WhBDKy8DLKqM7XxK8"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 font-poppins bg-[#00AEEF] hover:bg-[#0099CC] text-white px-8 py-4 text-base rounded-2xl shadow-md transition-all font-semibold text-center mb-3 sm:mb-0"
      >
        🆘 I Need Pet Help
      </a>
      <a
        href="https://forms.gle/WhBDKy8DLKqM7XxK8"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 font-poppins bg-[#FFD166] hover:bg-[#eeca50] text-[#554522] px-8 py-4 text-base rounded-2xl shadow-md transition-all font-semibold text-center"
      >
        🤲 I Can Offer Help
      </a>
    </div>
  </section>
);

export default HelpSection;
