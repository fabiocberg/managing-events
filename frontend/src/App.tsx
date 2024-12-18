import { useEffect, useState } from "react";
import { api } from "./api";
import EventList from "./EventList";
import EventForm from "./EventForm";

interface Event {
    id: number;
    title: string;
    startDate: string;
    endDate: string;
    price: number;
    status: string;
}

function App() {
    const [events, setEvents] = useState<Event[]>([]);

    const fetchEvents = async () => {
        try {
            const response = await api.get("/api/events");
            setEvents(response.data);
        } catch (error) {
            console.error("Failed to fetch events", error);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    const handleCreate = async (event: Omit<Event, "id">) => {
        try {
            await api.post("/api/events", event);
            fetchEvents();
        } catch (error) {
            console.error("Failed to create event", error);
        }
    };

    return (
        <div>
            <h1>Event Manager</h1>
            <EventForm onCreate={handleCreate} />
            <EventList events={events} onUpdateEvents={fetchEvents} />
        </div>
    );
}

export default App;
