import React from 'react';
import { connect } from 'react-redux';


export function GetMeals() {
    return new Promise((resolve, reject) => {
        fetch("http://localhost:57339/api/food/meals")
            .then(result => {
                console.log(result.status)
                if (result.status != 200) {
                    return reject("Error while fetching meals from API");
                }
                else
                    return result.json();
            })
            .then(data => { return resolve(data) })
    });
}

export function CreateMeal(Meal) {
    return new Promise((resolve, reject) => {
        fetch("http://localhost:57339/api/food/create", {
            method: 'POST',
            body: JSON.stringify(Meal), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(result => {
                if (result.status != 201) {
                    return reject("Error while creating meals from API");
                }
                else
                    return result.json();
        })
        .then(data => {return resolve(data)});
    })
}

// export function CreateMeal(Meal) {
//     console.log(Meal);
//     return new Promise((resolve, reject) => {
//         fetch(url, {
//             method: 'POST', // or 'PUT'
//             body: JSON.stringify(data), // data can be `string` or {object}!
//             headers:{
//               'Content-Type': 'application/json'
//             }
//           })
//             .then(result => {
//                 if (result.status != 201) {
//                     return reject("Error while creating meals from API");
//                 }
//                 else
//                     return result.json();
//             })
//             .then(data => { return resolve(data) })
//     })
// })
// }

