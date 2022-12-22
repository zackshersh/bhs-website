
export async function submitFormData(data){
    console.log(data)
    return new Promise((resolve,reject) => {
        const response = fetch("https://formspree.io/f/xlezqngl", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                resolve(res);
            })
            .catch(error => {
                reject(false);
            })
    })


    // console.log(res);
}