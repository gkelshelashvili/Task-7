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

//Toy functional way 2 Async/Await
// function toytwo(createTime, deliveryTime, sellTime) {
//     async function createToy() {
//         setTimeout(() => {
//             if (true) {
//                 let type = true
//                 return type, console.log('Toy was created successfully', sellToy())
//             } else {
//                 return console.log('There was a problem while creating the toy');
//             }
//         }, createTime);
//     }

//     async function deliver() {
//         setTimeout(() => {
//             if(true){
//                 return console.log('Toy was delivered')
//             }
//             else{
//                 return console.log('Toy wasnt delivered');
//             }
//         }, deliveryTime)
//     }

//     async function sellToy() {
//         setTimeout(() => {
//             if(true){
//                 return console.log('Toy was sold')
//             }
//             else{
//                 return console.log('Toy wasnt sold');
//             }
//         }, sellTime)
//     }

// }

// toytwo(3000, 2000); 