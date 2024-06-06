function mysetTimeout(delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(true) {
                resolve('success')
            }
            reject('failed') 
        }, delay);
    })
}

mysetTimeout(2000)
    .then(resp => console.log(resp))
    .catch(error => console.log(error))

// Toy functional way 1 Then/Catch
function toy(createTime,deliveryTime,sellTime) {
    const creat = new Promise((resolve,reject) => {
        if(true) {
            resolve('Toy was created successfully')
        }
        reject('There was problem while creating toy')

        setTimeout(() => {
            creat
                .then(resp => {
                    console.log(resp),
                    deliverToys(resp)
                })
                .catch(error => console.log(error))
        }, createTime)
    })
    
    function deliverToys(resp) {
        const deliver = new Promise((resolve,reject) => {
            if(resp == 'Toy was created successfully') {
                resolve('Your toy has been deliverd successfully')
            }else {
                reject('There was a problem while delivering  your toy')
            }
        })
        
        setTimeout(() => {
            deliver
                .then(del_success => {
                    console.log(del_success),
                    sellToy(del_success)
                })
                .catch(error => console.log(error))
        }, deliveryTime)
    }

    function sellToy(deliveryStatus) {
        const sell = new Promise((resolve, reject) => {
            if(deliveryStatus === 'Your toy has been deliverd successfully'){
                resolve('Toy was sold')
            }
            reject('There was a problem while selling a toy')
        }) 

        setTimeout(() => {
            sell
                .then(status => console.log(status))
                .catch(error => console.log(error))
        }, sellTime)
    }
}

toy(3000, 2000, 1000)

// Toy functional way 2 Async/Await
function toytwo(createTime, deliveryTime, sellTime) {
    function createToy() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (true) {
                    resolve('Toy was created successfully');
                } else {
                    reject('Creation failed');
                }
            }, createTime);
        });
    }

    function deliver(status) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (status == 'Toy was created successfully') {
                    resolve('Toy was delivered');
                } else {
                    reject('Delivery failed');
                }
            }, deliveryTime);
        });
    }

    function sellToy(sel_status) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (sel_status == 'Toy was delivered') {
                    resolve('Toy was sold successfully');
                } else {
                    reject('Sale failed');
                }
            }, sellTime);
        });
    }

    async function promisify() {
        try {
            const status = await createToy();
            console.log(status);
            const delivery = await deliver(status);
            console.log(delivery);
            const sel_status = await sellToy(delivery);
            console.log(sel_status);
        } catch (error) {
            console.log(error);
        }
    }

    promisify();
}
// toytwo(3000, 2000, 1000);