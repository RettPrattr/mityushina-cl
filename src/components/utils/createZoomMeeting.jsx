import axios from "axios"

export const createMeeting = async (dateAndTime, durationData) => {
  try {
    const response = await axios.post('api/zoom', {
      date: dateAndTime,
      duration: durationData
    })
    const data = response.data
    return [data.result[0], data.result[1]]
  } catch (error) {
    console.log(error)
  }
}