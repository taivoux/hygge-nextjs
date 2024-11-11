import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MenuCard from './MenuCard';

function getNextFiveWeekdays(): string[] {
  const today = new Date();
  const hour = today.getHours();

  // except today
  today.setDate(today.getDate() + 1);

  if (hour >= 21) {
    today.setDate(today.getDate() + 1);
  }

  const weekdays: string[] = [];
  let count = 0;

  while (weekdays.length < 5) {
    today.setDate(today.getDate() + (count === 0 ? 0 : 1));
    const dayOfWeek = today.getDay();

    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      const dayName = today.toLocaleDateString("en-US", { weekday: 'long' });
      const formattedDate = `${today.getDate()}/${today.getMonth() + 1}`;
      weekdays.push(`${dayName} (${formattedDate})`);
    }
    count++;
  }

  return weekdays;
}

export default function WeekdayList() {
  const weekdays = getNextFiveWeekdays();

  return (
    <Tabs defaultValue="1" className="">
        <TabsList>
            {weekdays.map((day, index) => (
                <TabsTrigger key={index} value={index.toString()} > {day} </TabsTrigger>
            ))}
        </TabsList>
            {weekdays.map((day, index) => (
                <TabsContent key={index} value={index.toString()} > Content {day} 
                    <MenuCard />
                </TabsContent>
            ))}
    </Tabs>
  );
}