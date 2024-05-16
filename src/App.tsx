import React, { useEffect, useState } from "react";
import ReminderList from "./ReminderList";
import ReminderService from "./services/reminder";
import Reminder from "./model/reminder";
import NewReminder from "./NewReminder";
import "./App.css";

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  useEffect(() => {
    loadReminder();
  }, []);

  const loadReminder = async () => {
    const reminders = await ReminderService.getReminder();
    setReminders(reminders);
  };

  const removeReminder = (id: number) => {
    setReminders(reminders.filter((reminder) => reminder.id !== id));
  };

  const addReminder = async (title: string) => {
    // console.log(title);
    const newRem = await ReminderService.addReminder(title);
    setReminders([newRem, ...reminders]);
  };

  return (
    <div>
      <NewReminder addReminder={addReminder} />
      <ReminderList onRemoveReminder={removeReminder} items={reminders} />
    </div>
  );
}
export default App;
