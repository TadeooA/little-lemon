import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Calendar, Clock, Users } from "lucide-react";

type formInformation = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  numberOfPeople: number;
  specialComments: string;
};

type ReservationProps = {
  toggle: () => void;
  retrievedData?: (data: formInformation) => void;
};

const Reservation: React.FC<ReservationProps> = ({ toggle, retrievedData }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const data: formInformation = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      date: formData.get("date") as string,
      time: formData.get("time") as string,
      numberOfPeople: parseInt(formData.get("numberOfPeople") as string, 10),
      specialComments: formData.get("specialComments") as string,
    };

    console.log("Form submitted with data:", data);

    if (retrievedData) {
      retrievedData(data);
    }

    toggle();
    form.reset();
  };

  return (
    <section id="reservations" className="py-20 bg-gradient-to-b from-neutral-900 to-teal-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">Make a Reservation</h2>
            <p className="text-xl text-gray-100">
              Reserve your table and enjoy a unique dining experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Reservation Form */}
            <Card className="bg-neutral-800 border border-neutral-700 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-white" />
                  Reservation Form
                </CardTitle>
                <CardDescription>
                  Complete the details to confirm your reservation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-white mb-2 block">
                        First Name
                      </label>
                      <Input name="firstName" placeholder="Your first name" required />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-white mb-2 block">
                        Last Name
                      </label>
                      <Input name="lastName" placeholder="Your last name" required />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-white mb-2 block">Email</label>
                    <Input name="email" type="email" placeholder="your@email.com" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-white mb-2 block">Phone</label>
                    <Input name="phone" type="tel" placeholder="+1 234 567 8900" required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-white mb-2 block">Date</label>
                      <Input name="date" type="date" required />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-white mb-2 block">Time</label>
                      <Input name="time" type="time" required />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-white mb-2 block">
                      Number of people
                    </label>
                    <Input name="numberOfPeople" type="number" min="1" max="12" placeholder="2" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-white mb-2 block">
                      Special comments
                    </label>
                    <Textarea name="specialComments" placeholder="Allergies, celebrations, etc." />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-yellow-500 hover:bg-lemon-green-600 text-neutral-700 font-semibold cursor-pointer transition-colors duration-300"
                  >
                    Confirm Reservation
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Restaurant Info */}
            <div className="space-y-8">
              <Card className="bg-neutral-800 border border-neutral-700 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-lemon-green-500" />
                    Opening Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Monday - Thursday</span>
                    <span>12:00 PM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Friday - Saturday</span>
                    <span>12:00 PM - 11:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sunday</span>
                    <span>12:00 PM - 9:00 PM</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-neutral-800 border border-neutral-700 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-white" />
                    Important Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-white">• Reservations are confirmed by phone or email</p>
                  <p className="text-sm text-white">• Maximum 12 people per reservation</p>
                  <p className="text-sm text-white">• Cancellations with 24 hours notice</p>
                  <p className="text-sm text-white">• Tables available for 2 hours</p>
                </CardContent>
              </Card>

              <div className="bg-neutral-800 p-6 rounded-lg border border-lemon-yellow-200">
                <h3 className="font-semibold text-lemon-green-700 mb-2">Need help?</h3>
                <p className="text-lemon-green-600 text-sm mb-4">
                  Call us directly for large group reservations or special events.
                </p>
                <Button
                  variant="outline"
                  className="border-lemon-green-500 text-lemon-green-500 hover:bg-lemon-green-500 hover:text-white bg-transparent"
                >
                  Call Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
