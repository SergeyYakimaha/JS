'use strinct';

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Preparing data ...');

        const serverData = {
            server: 'aws',
            port: 5090,
            status: 'working'
        };

        const Clientdata = {
            name: 'Sergey',
            age: 43
        };

        resolve(Object.assign(serverData, Clientdata));

    }, 2000);
});

p.then(data => {
    return new Promise(function(resolve, reject) {
        data.modify = new Date();
        
        if (data.port == 500) {
            resolve(data);
        } else {
            reject();
        }
    });
})
// .then(data => {
//     console.log(data);
//     return 100;
// }, data => {
//     console.log(data);
//     return 500;
// }).then(number => {
//     console.log(number);
// });
.then(data => {
    console.log(data);
    return 100;
})
.catch(data => {
    console.log(data);
    return 500;
})
.finally(number => {
    console.log(number);
});


const t = function myResolve() {
    console.log('myResolve');
};

const myResolve = function() {
    console.log('myResolve');
};

function myReject() {
    console.log('myResolve');
}

new Promise((t, myReject) => {
    t(500);
    //myReject(900);
}).then(data => {
    console.log(`${data}`);
}, data => {
    console.log(data + 500);
});

// const sleep = ms => {
//     const p = new Promise(resolve => {
//         console.log('resolve');    
//     },
//     reject => {
//         console.log('reject');    
//     }); 
// };

// sleep(100);

const p1 = new Promise((myResolve, myReject) => {
        setTimeout(() => {
            console.log(5000);
            myReject();        
        }, 5000);
      }),
      
      p2 = new Promise((myResolve, myReject) => {
        setTimeout(() => {
            console.log(2000); 
            myResolve();                       
        }, 1000);
      });

// Promise.all([p1, p2]).then(() => {
//     console.log('Succsess');
// }).catch(() => {
//     console.log('----');
// });     

Promise.race([p1, p2]).then(() => {
    console.log('Succsess');
});

      

      
