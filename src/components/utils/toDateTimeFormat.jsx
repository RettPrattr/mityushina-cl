const toDateTimeFormat = (selectedYear, selectedMonth, selectedDay, selectedTime) => {

    const date = new Date(selectedYear, selectedMonth - 1, selectedDay);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    const [hours, minutes] = selectedTime.split(":");

    return `${year}-${month}-${day}T${hours}:${minutes}:00.000`
    
}

export default toDateTimeFormat