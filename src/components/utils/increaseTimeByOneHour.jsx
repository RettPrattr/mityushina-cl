// Метод для увеличения времени на 1 час 
const increaseTimeByOneHour = (selectedTime) => {
    const [hours, minutes] = selectedTime.split(':');

    const time = new Date();
    time.setHours(hours);
    time.setMinutes(minutes);

    time.setHours(time.getHours() + 1);

    const updatedHours = time.getHours().toString().padStart(2, '0');
    const updatedMinutes = time.getMinutes().toString().padStart(2, '0');

    const updatedTime = `${updatedHours}:${updatedMinutes}`;

    return updatedTime;
  }

export default increaseTimeByOneHour