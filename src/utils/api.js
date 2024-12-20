const customFetch = async (
    url,
    resource,
    method = "GET",
    needToken = true,
    data = null
) => {
    let requestOptions = {}

    if (needToken) {
        requestOptions = {
            method,
            headers: {
                "Content-Type": "application/json",
                authorization: localStorage.getItem("token"),
            },
        }
    } else {
        requestOptions = {
            method,
            headers: {
                "Content-Type": "application/json",
            },
        }
    }

    if (data) {
        requestOptions.body = JSON.stringify(data)
    }

    try {
        const response = await fetch(`${url}${resource}`, requestOptions)

        if (!response.ok) {
            console.log(response)
            return await response.json()
        } else {
            const responseData = await response.json()
            return responseData
        }
    } catch (error) {
        console.error("Error fetching data:", error)
        throw new Error(error)
    }
}

export default customFetch
