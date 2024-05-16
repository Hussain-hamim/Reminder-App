import React, { useState } from "react";
import "./App.css";

interface NewReminderProps {
  addReminder: (title: string) => void;
}

const NewReminder = ({ addReminder }: NewReminderProps): JSX.Element => {
  const [title, setTitle] = useState("");

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;
    addReminder(title);
    setTitle("");
  };

  return (
    <>
      <h2 className="appName">Your Reminder App</h2>
      <form onSubmit={submitForm}>
        <label htmlFor="title" className="mb-2"></label>
        <input
          placeholder="Type new reminder here..."
          className="form-control"
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit" className="btn my-3 btn-primary rounded-pill">
          Add Reminder
        </button>
      </form>
    </>
  );
};

export default NewReminder;
