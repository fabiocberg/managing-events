import React, { useState } from "react";

import "./EventForm.css";

interface EventFormProps {
    onCreate: (event: {
        title: string;
        startDate: string;
        endDate: string;
        price: number;
        status: string;
    }) => void;
}

const EventForm: React.FC<EventFormProps> = ({ onCreate }) => {
    const [form, setForm] = useState({
        title: "",
        startDate: "",
        endDate: "",
        price: 0,
        status: "Paused",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onCreate(form);
    };

    return (
        <form className="event-form" onSubmit={handleSubmit}>
            <div>
                <input
                    name="title"
                    placeholder="Title"
                    onChange={handleChange}
                    required
                />
            </div>
            <input
                name="startDate"
                type="datetime-local"
                onChange={handleChange}
                required
            />
            <input
                name="endDate"
                type="datetime-local"
                onChange={handleChange}
                required
            />
            <div>
                <input
                    name="price"
                    type="number"
                    placeholder="Price"
                    onChange={handleChange}
                    required
                />
            </div>
            <select name="status" onChange={handleChange} defaultValue="Paused">
                <option value="Started">Started</option>
                <option value="Completed">Completed</option>
                <option value="Paused">Paused</option>
            </select>

            <div>
                <button type="submit">Create Event</button>
            </div>
        </form>
    );
};

export default EventForm;
