'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/context/AuthContext';
import { format } from 'date-fns';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle, Calendar as CalendarIcon, Loader2 } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

export default function MainDashboard() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [dateFilter, setDateFilter] = useState(null);
  const [pagination, setPagination] = useState({
    page: 0,
    limit: 10,
    total: 0,
  });

  useEffect(() => {
    fetchBookings();
  }, [pagination.page, pagination.limit, dateFilter]);

  const fetchBookings = async () => {
    try {
      setLoading(true);

      let url = `/api/auth?page=${pagination.page + 1}&limit=${pagination.limit}`;
      if (dateFilter) {
        url += `&date=${dateFilter.toISOString()}`;
      }

      const res = await fetch(url);
      const data = await res.json();

      if (!data.success) {
        throw new Error(data.message || 'Failed to fetch bookings');
      }

      setBookings(data.data);
      setPagination((prev) => ({
        ...prev,
        total: data.pagination.total,
      }));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChangePage = (newPage) => {
    setPagination((prev) => ({ ...prev, page: newPage }));
  };

  const handleChangeRowsPerPage = (event) => {
    setPagination((prev) => ({
      ...prev,
      limit: parseInt(event.target.value, 10),
      page: 0,
    }));
  };

  return (
    <div className="container max-w-6xl mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <CardTitle className="text-3xl font-bold text-[#e92e3e]">Seminar Bookings</CardTitle>
            
            <div className="flex flex-col sm:flex-row gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="justify-start text-left font-normal">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {dateFilter ? format(dateFilter, 'PPP') : 'Filter by date'}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={dateFilter}
                    onSelect={setDateFilter}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              
              <Button
                variant="outline"
                onClick={() => setDateFilter(null)}
                disabled={!dateFilter}
              >
                Clear Filter
              </Button>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          {error && (
            <Alert variant="destructive" className="mb-6">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {loading ? (
            <div className="flex justify-center items-center min-h-[200px]">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : (
            <>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>CNIC</TableHead>
                      <TableHead>Seminar Date</TableHead>
                      <TableHead>Time Slot</TableHead>
                      <TableHead>Booking Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {bookings.map((booking) => (
                      <TableRow key={booking._id}>
                        <TableCell>{booking.user?.name}</TableCell>
                        <TableCell>{booking.user?.email}</TableCell>
                        <TableCell>{booking.user?.phone}</TableCell>
                        <TableCell>{booking.user?.cnic}</TableCell>
                        <TableCell>
                          {booking.seminar?.date
                            ? format(new Date(booking.seminar.date), 'PPP')
                            : 'N/A'}
                        </TableCell>
                        <TableCell>{booking.seminar?.timeSlot || 'N/A'}</TableCell>
                        <TableCell>
                          {format(new Date(booking.createdAt), 'PPP')}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div className="flex items-center justify-between px-2 py-4">
                <div className="flex-1 text-sm text-muted-foreground">
                  Showing {pagination.page * pagination.limit + 1} to{' '}
                  {Math.min((pagination.page + 1) * pagination.limit, pagination.total)} of{' '}
                  {pagination.total} bookings
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleChangePage(pagination.page - 1)}
                    disabled={pagination.page === 0}
                  >
                    Previous
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleChangePage(pagination.page + 1)}
                    disabled={
                      (pagination.page + 1) * pagination.limit >= pagination.total
                    }
                  >
                    Next
                  </Button>
                </div>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}