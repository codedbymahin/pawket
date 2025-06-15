
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewsletterModal = ({ isOpen, onClose }: NewsletterModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md rounded-3xl bg-white border-0 shadow-2xl">
        <DialogHeader className="text-center">
          <DialogTitle className="text-2xl font-bold text-[#00AEEF] mb-4 font-['Nunito',sans-serif]">
            You're Now Subscribed!
          </DialogTitle>
          <DialogDescription className="text-gray-600 leading-relaxed font-['Nunito',sans-serif]">
            <div className="space-y-4">
              <p>Thanks for joining the Pawket family.</p>
              <p>You'll now receive the latest pet care tips, feature updates, and early access news — all with a touch of love.</p>
              <p className="font-semibold text-[#00AEEF]">Stay pawsome!</p>
              <a
                href="https://forms.gle/WhBDKy8DLKqM7XxK8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 font-poppins bg-[#FFD166] hover:bg-[#eeca50] text-[#705000] px-7 py-3 rounded-2xl font-semibold shadow transition-all"
              >
                Take Our Quick Survey
              </a>
            </div>
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center pt-4">
          <Button 
            onClick={onClose}
            className="text-white rounded-2xl px-8 py-3 bg-[#00AEEF] hover:bg-[#0099CC] font-['Nunito',sans-serif] transform hover:scale-105 transition-all duration-300"
          >
            Got it!
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewsletterModal;
