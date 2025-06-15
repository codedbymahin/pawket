
import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const options = [
  {
    label: "📍 I lost my pet",
    reply: "Please head to our Lost & Found section and report your pet. We’re here for you."
  },
  {
    label: "🐕 I want to adopt",
    reply: "Explore our Adopt a Pet section to find your next furry friend."
  },
  {
    label: "🧳 I want to share my pet",
    reply: "Our Pet Sharing feature lets you temporarily share your pet with trusted Pawket users."
  },
  {
    label: "🚨 I need emergency help",
    reply: "Visit the Emergency Help section for guidance and local support options."
  },
];

const PawkoChatbot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedReply, setSelectedReply] = useState<string | null>(null);

  const handleOption = (reply: string) => {
    setSelectedReply(reply);
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => setSelectedReply(null), 300); // Reset after closing
  };

  return (
    <>
      {/* Floating Chat Icon*/}
      <button
        className="fixed z-50 bottom-6 right-6 bg-[#00AEEF] hover:bg-[#0099CC] rounded-full shadow-xl w-16 h-16 flex items-center justify-center ring-4 ring-[#00AEEF]/20 transition-all"
        aria-label="Open Pawko Chatbot"
        onClick={() => setOpen(true)}
        style={{ boxShadow: "0 4px 24px 0px #00AEEF44" }}
      >
        <MessageCircle className="text-white" size={32} />
      </button>
      {/* Chat Modal/Dialog */}
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="max-w-md rounded-3xl p-0 border-0 shadow-[0_12px_32px_0_rgba(0,174,239,0.09)]">
          <div className="bg-gradient-to-br from-[#f4fafd] to-[#f1faff] rounded-3xl p-7 pb-5 pt-7 text-center font-nunito">
            <div className="mx-auto mb-3 flex items-center justify-center w-14 h-14 rounded-full bg-[#00AEEF]/10">
              <MessageCircle className="text-[#00AEEF]" size={36} />
            </div>
            <div className="font-bold text-xl text-[#00AEEF] mb-2">Hi! I’m Pawko — your Pawket Assistant.</div>
            <div className="text-gray-700 mb-6">What would you like help with today?</div>
            {!selectedReply ? (
              <div className="flex flex-col gap-3">
                {options.map(opt => (
                  <Button
                    variant="secondary"
                    key={opt.label}
                    onClick={() => handleOption(opt.reply)}
                    className="justify-center font-poppins text-base py-3 rounded-xl bg-white shadow-sm hover:bg-[#e8f6fb] border border-[#00aeef44] text-[#045] transition-all"
                  >
                    {opt.label}
                  </Button>
                ))}
              </div>
            ) : (
              <div className="bg-white/70 p-6 rounded-xl mb-4 leading-relaxed text-[#333] shadow-inner">{selectedReply}</div>
            )}
            <div className="mt-4">
              <Button
                variant="default"
                onClick={handleClose}
                className="rounded-xl px-8 text-base font-semibold font-poppins bg-[#00AEEF] hover:bg-[#0099CC] text-white mt-1"
              >
                Close
              </Button>
            </div>
            <div className="text-xs text-gray-400 mt-1">(This is a demo assistant. No real data is shared.)</div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PawkoChatbot;
