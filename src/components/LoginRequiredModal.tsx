
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface LoginRequiredModalProps {
  isOpen: boolean;
  onClose: () => void;
  buttonClassName?: string;
}

const LoginRequiredModal = ({ isOpen, onClose, buttonClassName }: LoginRequiredModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md rounded-3xl">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold font-poppins">
            ⚠️ Login Required
          </DialogTitle>
          <DialogDescription className="text-center text-gray-600 pt-4 leading-relaxed font-nunito">
            Login required to access this feature. Guest access is view-only. (Only early access users approved by the Pawket Team can log in and use these services.)
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center pt-4">
          <Button 
            onClick={onClose}
            className={`${buttonClassName} text-white rounded-2xl px-8 font-poppins hover:scale-105 transition-transform duration-300`}
          >
            Understood
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginRequiredModal;
