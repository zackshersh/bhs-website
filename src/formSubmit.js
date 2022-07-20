
export async function submitFormData(data){
    console.log(data)

    const response = fetch("https://formspree.io/f/xlezqngl", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => {
            return(res);
        })
        .catch(error => {
            return(false);
        })

    // console.log(res);
}