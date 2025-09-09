'use client';
import { useState, useEffect } from 'react';
import { format, isTuesday, isThursday, isSaturday, addDays } from 'date-fns';
import { useRouter } from 'next/navigation';
import { Calendar as CalendarIcon, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from "@/components/ui/calendar"

export default function SeminarPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cnic: '',
    date: null,
    slot: '',
  });
  const [errors, setErrors] = useState({});
  const [availableDates, setAvailableDates] = useState([]);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [capacityReached, setCapacityReached] = useState(false);
  const [seminars, setSeminars] = useState([]);
  const [isFormValid, setIsFormValid] = useState(false);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const getUser = localStorage.getItem('user');
    if (getUser) {
      const { _id, name, email, phone, cnic } = JSON.parse(getUser);
      setUserId(_id);
      setFormData({
        name,
        email,
        phone,
        cnic,
      });
    }
  }, []);

  // Fetch seminars
  useEffect(() => {
    const fetchSeminars = async () => {
      try {
        const res = await fetch('/api/seminar');
        const data = await res.json();
        if (data.success) {
          setSeminars(data.data);
        }
      } catch (error) {
        console.error('Error fetching seminars:', error);
      }
    };
    fetchSeminars();
  }, []);

  // Generate available dates
  useEffect(() => {
    const dates = [];
    for (let i = 0; i < 30; i++) {
      const date = addDays(new Date(), i);
      if (isTuesday(date) || isThursday(date) || isSaturday(date)) {
        dates.push(date);
      }
    }
    setAvailableDates(dates);
  }, []);

  // Update slots when date changes
  useEffect(() => {
    if (formData.date) {
      const dateKey = format(formData.date, 'yyyy-MM-dd');
      const seminar = seminars.find(
        (s) => format(s.date, 'yyyy-MM-dd') === dateKey
      );

      if (seminar) {
        const slots = [];
        if (seminar.attendees.length < seminar.maxCapacity) {
          slots.push(seminar.timeSlot);
        }
        setAvailableSlots(slots);
        setCapacityReached(slots.length === 0);
      } else {
        setAvailableSlots(['2PM-5PM']);
        setCapacityReached(false);
      }
    }
  }, [formData.date, seminars]);

  // Validate form whenever formData changes
  useEffect(() => {
    validateForm();
  }, [formData]);

  const validateForm = () => {
    const newErrors = {};

    // Name validation (no numbers allowed)
    if (!formData.name?.trim()) {
      newErrors.name = 'Name is required';
    } else if (/\d/.test(formData.name)) {
      newErrors.name = 'Name should not contain numbers';
    }

    // Email validation
    if (!formData.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    // Phone validation
    if (!formData.phone?.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{11}$/.test(formData.phone)) {
      newErrors.phone = 'Phone must be 11 digits';
    }

    // CNIC validation
    if (!formData.cnic?.trim()) {
      newErrors.cnic = 'CNIC is required';
    } else if (!/^\d{13}$/.test(formData.cnic)) {
      newErrors.cnic = 'CNIC must be 13 digits';
    }

    // Date validation
    if (!formData.date) {
      newErrors.date = 'Date is required';
    }

    // Slot validation
    if (!formData.slot) {
      newErrors.slot = 'Time slot is required';
    }

    setErrors(newErrors);
    const isValid = Object.keys(newErrors).length === 0;
    setIsFormValid(isValid);
    return isValid;
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      try {
        const response = await fetch('/api/seminar', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            cnic: formData.cnic,
            date: formData.date,
            timeSlot: formData.slot,
            userId,
          }),
        });

        const data = await response.json();

        if (data.success) {
          setSuccess(true);
          // Refresh seminars
          const res = await fetch('/api/seminar');
          const seminarData = await res.json();
          if (seminarData.success) setSeminars(seminarData.data);
          setTimeout(() => {
            router.push('/');
          }, 3000);
        } else {
          alert(data.message || 'Booking failed');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const shouldDisableDate = (date) => {
    return !(isTuesday(date) || isThursday(date) || isSaturday(date));
  };


  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Seminar Booking</CardTitle>
          <p className="text-sm text-gray-600">
            Seminars are held every Tuesday, Thursday, and Saturday from 2PM to 5PM.
          </p>
        </CardHeader>
        <CardContent>
          {capacityReached && (
            <Alert variant="destructive" className="mb-6">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Capacity Reached</AlertTitle>
              <AlertDescription>
                All slots for this date are fully booked. Please select another date.
              </AlertDescription>
            </Alert>
          )}

          {success && (
            <Alert className="mb-6 border-green-600 border-2">
              <CheckCircle2 className="h-4 w-4 mt-1" />
              <AlertTitle className='font-bold text-green-600 text-lg'>Success!</AlertTitle>
              <AlertDescription className='text-md'>
                Your seminar booking has been confirmed!
              </AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                />
                {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                />
                {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="space-y-2">
                <Label htmlFor="cnic">CNIC Number</Label>
                <Input
                  id="cnic"
                  value={formData.cnic}
                  onChange={(e) => handleChange('cnic', e.target.value)}
                />
                {errors.cnic && <p className="text-sm text-red-500">{errors.cnic}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                />
                {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 mb-6">
              <div className="space-y-2">
                <Label>Select Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.date ? (
                        format(formData.date, 'PPP')
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={formData.date}
                      onSelect={(date) => {
                        setFormData((prev) => ({ ...prev, date, slot: '' }));
                      }}
                      disabled={(date) => shouldDisableDate(date)}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                {errors.date && <p className="text-sm text-red-500">{errors.date}</p>}
              </div>
            </div>

            {formData.date && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Available Time Slots</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Time Slot</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {availableSlots.map((slot) => {
                      const dateKey = format(formData.date, 'yyyy-MM-dd');
                      const seminar = seminars.find(
                        (s) =>
                          format(s.date, 'yyyy-MM-dd') === dateKey && s.timeSlot === slot
                      );

                      const available = seminar
                        ? seminar.maxCapacity - seminar.attendees.length
                        : 100;

                      return (
                        <TableRow key={slot}>
                          <TableCell>{slot}</TableCell>
                          <TableCell className="text-green-500">Press to Confirm</TableCell>
                          <TableCell>
                            <Button
                              variant={formData.slot === slot ? 'default' : 'outline'}
                              onClick={() => {
                                setFormData((prev) => ({ ...prev, slot }));
                              }}
                              className={`${formData.slot === slot ? 'bg-[#e92e3e] cursor-pointer hover:bg-[#e92e3e]' : 'bg-transparent'}`}
                              disabled={available <= 0}
                              type='button'
                            >
                              {available <= 0 ? 'Fully Booked' : 'Confirm'}
                            </Button>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
                {errors.slot && <p className="text-sm text-red-500 mt-2">{errors.slot}</p>}
              </div>
            )}

            <Button
              type="submit"
              className="w-full bg-[#e92e3e] cursor-pointer hover:bg-[#e92e3e]"
              disabled={isSubmitting || !isFormValid}
            >
              {isSubmitting ? 'Submitting...' : 'Book Seminar'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}