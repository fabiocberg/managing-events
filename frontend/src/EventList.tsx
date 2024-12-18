import React from "react";
import { api } from "./api";

import "./EventList.css";

interface Event {
    id: number;
    title: string;
    startDate: string;
    endDate: string;
    price: number;
    status: string;
}

interface EventListProps {
    events: Event[];
    onUpdateEvents: () => void;
}

const EventList: React.FC<EventListProps> = ({ events, onUpdateEvents }) => {
    const handleDelete = async (eventId: number) => {
        try {
            const confirmDelete = window.confirm(
                "Are you sure you want to delete this event?"
            );
            if (confirmDelete) {
                await api.delete(`/api/events/${eventId}`);
                onUpdateEvents();
            }
        } catch (error) {
            console.error("Failed to delete event", error);
        }
    };

    return (
        <ul>
            {events.map((event) => (
                <li key={event.id} className="event-item">
                    <div>
                        <h3>
                            {event.id} - {event.title}
                        </h3>
                        <p>Start: {event.startDate}</p>
                        <p>End: {event.endDate}</p>
                        <p>Price: ${event.price}</p>
                        <p>Status: {event.status}</p>
                    </div>
                    <button onClick={() => handleDelete(event.id)}>
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default EventList;
