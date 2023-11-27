const increaseTimeByMinutes = (selectedTime, minutesToAdd) => {
    console.log(selectedTime, minutesToAdd)
    const [hours, minutes] = selectedTime.split(':');

    const time = new Date();
    time.setHours(hours);
    time.setMinutes(minutes);

    time.setMinutes(time.getMinutes() + minutesToAdd);

    const updatedHours = time.getHours().toString().padStart(2, '0');
    const updatedMinutes = time.getMinutes().toString().padStart(2, '0');

    const updatedTime = `${updatedHours}:${updatedMinutes}`;

    return updatedTime;
}

export default increaseTimeByMinutes;