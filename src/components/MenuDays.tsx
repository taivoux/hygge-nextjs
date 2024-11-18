import { useEffect, useState } from 'react';
import WeekdayList from './Weekday'

export default function MenuDays() {
  // State to track if the current time is past 21:00
  const [isAfter9PM, setIsAfter9PM] = useState(false);

  useEffect(() => {
    // Function to check if current time is past 21:00
    const checkTime = () => {
      const now = new Date();
      const currentHour = now.getHours();
      const currentMinute = now.getMinutes();

      // Check if time is past 21:00 (9 PM)
      if (currentHour > 21 || (currentHour === 21 && currentMinute > 0)) {
        setIsAfter9PM(true);
      } else {
        setIsAfter9PM(false);
      }
    };

    // Initial check when the component mounts
    checkTime();

    // Set an interval to check every minute (60000 milliseconds)
    const intervalId = setInterval(checkTime, 60000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p>{isAfter9PM ? "After 9PM" : "Before 9PM)"}</p>
      <WeekdayList/>
    </div>
  );
}
