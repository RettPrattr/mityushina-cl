import axios from "axios"

const createCalendarEvent = async (summary, description, startDateTime, endDateTime) => {

    // ВРЕМЯ В ФОРМАТЕ YYYY-MM-DDTHH:MM:SS:000
    const event = {
        summary: summary,
        description: description,
        start: {dateTime: startDateTime},
        end: {dateTime: endDateTime}
    }

    try { 
        const response = await axios.post('/api/calendar', {
            event
        })
        return response.data.data.id
    } catch (error) {
        console.error(error)
    }
} 

export default createCalendarEvent