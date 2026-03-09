axios.get("/api/jokes")
    .then((response)=>{
        setjokes(response.data)
    })
    .catch((error)=>{
        console.log(error)
    })