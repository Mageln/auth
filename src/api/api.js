

export const onFinish = (value) => {
    fetch("address", {
        method:"Post",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(value)
    })
    .then(response => {
        const responseData = {message: "Успешная авторизация"};
        console.log("success:", responseData)
    })
    .catch(error => console.log("Error", error))

}