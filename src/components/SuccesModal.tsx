import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Button } from "./ui/button";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    date: string;
    time: string;
    numberOfPeople: number;
    specialComments: string;
  };
}

export const ReservationModal = ({ isOpen, onClose, formData }: ReservationModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md max-h-[90vh] p-6 text-center bg-gradient-to-t from-neutral-950 to-teal-900 shadow-lg rounded-lg ">
        <div className="flex justify-center">
          <img
            src="succesD.png"
            alt="Success"
            className="w-64 h-64 object-contain mb-4"
          />
        </div>
        <DialogHeader className="text-center -mt-8 flex flex-col items-center">
          <DialogTitle className="text-2xl text-yellow-500  font-bold">Reservation Confirmed!</DialogTitle>
          <DialogDescription className="mt-2 text-sm text-white">
            Thank you, {formData.firstName} {formData.lastName}! We have received your reservation:
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-row justify-center -mt-2 text-white">
          <p className="text-sm"> Your reservation date is <span className="font-bold text-red-500">{formData.date}</span> at {""} 
          <span className="font-bold text-red-500">{formData.time}</span> for {" "}<span className="font-bold text-red-500">{formData.numberOfPeople}</span> people.
            {formData.specialComments && (
              <p className="text-sm text-yellow-500">Comments: {" "}{formData.specialComments}</p>
            )}
          </p>

        </div>

        <Button onClick={onClose} className="mt-2 bg-yellow-500 hover:bg-yellow-700 text-neutral-950 font-bold">
          Close
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default ReservationModal;
