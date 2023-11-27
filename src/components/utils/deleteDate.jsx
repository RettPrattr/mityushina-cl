const deleteDate = async (date, oldDate) => {
    const response = await fetch(`${process.env.API_LINK}/api/time-availables/?filters[dateTime][$eq]=${date}`)
    const data = await response.json()
    const id = data.data?.[0]?.id
    await fetch(`${process.env.API_LINK}/api/time-availables/${id}`, {method: 'DELETE'})
    
    if (oldDate!==null){
        await fetch(`${process.env.API_LINK}/api/time-availables`, {
        method: 'POST',
        headers: {'Content-type': 'application/json',},
        body: JSON.stringify({data: {dateTime: oldDate}})
        })
    }
}

export default deleteDate