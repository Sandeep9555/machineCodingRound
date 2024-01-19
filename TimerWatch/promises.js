
// const p1=new Promise((resolve,reject)=>{
//     setInterval(() => {
//         resolve("P1 Success")
//     }, 3000);
// })
// const p2=new Promise((resolve,reject)=>{
//     setInterval(() => {
//         reject("P2 Fail")
//     }, 1000);
// })
// const p3=new Promise((resolve,reject)=>{
//     setInterval(() => {
//         resolve("P3 Success")
//     }, 2000);
// })

// Promise.all([p1,p2,p3])
// .then((res)=>{ 
//     console.log(res)

// }) .catch((err)=>{
//     console.error(err)

// })

//promise.allSettled()

// const p1=new Promise((resolve,reject)=>{
//       setInterval(() => {
//           resolve("P1 Success")
//        }, 3000);
//  })
//     const p2=new Promise((resolve,reject)=>{
//          setInterval(() => {
//             reject("P2 Fail")
//         }, 1000);
//     })
//     const p3=new Promise((resolve,reject)=>{
//         setInterval(() => {
//             resolve("P3 Success")
//       }, 2000);
//     })
    
//     Promise.allSettled([p1,p2,p3])
//     .then((res)=>{ 
//         console.log(res)
    
//     }) .catch((err)=>{
//         console.error(err)
//     });


//promise.race

// const p1=new Promise((resolve,reject)=>{
//         setInterval(() => {
//             resolve("P1 Success")
//         }, 3000);
//     })
//     const p2=new Promise((resolve,reject)=>{
//         setInterval(() => {
//             reject("P2 Fail")
//         }, 4000);
//     })
//     const p3=new Promise((resolve,reject)=>{
//         setInterval(() => {
//             resolve("P3 Success")
//         }, 2000);
//     })
    
//     Promise.race([p1,p2,p3])
//     .then((res)=>{ 
//         console.log(res)
    
//     }) .catch((err)=>{
//         console.error(err)
//     })


//promise.any()

const p1=new Promise((resolve,reject)=>{
        setInterval(() => {
            resolve("P1 Success")
        }, 3000);
    })
    const p2=new Promise((resolve,reject)=>{
        setInterval(() => {
            reject("P2 Fail")
        }, 1000);
    })
    const p3=new Promise((resolve,reject)=>{
        setInterval(() => {
            resolve("P3 Success")
        }, 4000);
    })
    
    Promise.any([p1,p2,p3])
    .then((res)=>{ 
        console.log(res)
    
    }) .catch((err)=>{
        console.error(err)
    });