
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ComingSoonModal = ({ isOpen, onClose }: ComingSoonModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md rounded-3xl" style={{ backgroundColor: '#F8F9FA' }}>
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold font-poppins" style={{ color: '#333333' }}>
            🚧 Coming Soon!
          </DialogTitle>
          <DialogDescription className="text-center text-gray-600 pt-4 font-nunito">
            This exciting feature is coming soon to make your pet care journey even better. Stay tuned!
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center pt-4">
          <Button 
            onClick={onClose}
            className="text-white rounded-2xl px-8 font-poppins hover:scale-105 transition-transform duration-300"
            style={{ background: 'linear-gradient(135deg, #00AEEF, #0099CC)' }}
          >
            Got it! 🐾
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ComingSoonModal;
