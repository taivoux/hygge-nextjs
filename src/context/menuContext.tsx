'use client';

import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { DateOnMenu } from '@/interface/types';
import getNextFiveWeekdays from '@/utils/dateUtils';

interface MenuContextType {
  weekdays: DateOnMenu[] | null;
  isLoading: boolean;
  error: string | null;
  setWeekdays: React.Dispatch<React.SetStateAction< DateOnMenu[] | null >>;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const MenuProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [weekdays, setWeekdays] = useState<DateOnMenu[]>([]); 
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchWeekdays = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await getNextFiveWeekdays();
      setWeekdays(data);
    } catch (err) {
      console.error('Error fetching weekdays:', err);
      setError('Failed to fetch weekdays. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!weekdays || weekdays.length === 0) {
        fetchWeekdays(); // Only fetch if data doesn't exist
    }
  }, [weekdays]);

  const value = useMemo(
    () => ({
      weekdays,
      isLoading,
      error,
      setWeekdays,
    }),
    [weekdays, isLoading, error]
  );

  return (
    <MenuContext.Provider value={value}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
};
