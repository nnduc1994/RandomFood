import React from 'react';
import { connect } from 'react-redux';

const baseURL = "https://randomfoodapi.azurewebsites.net";
//const baseURL = "http://localhost:57339";

export function GetMeals() {
    return new Promise((resolve, reject) => {
        fetch(`${baseURL}/api/food/meals`)
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
        fetch(`${baseURL}/api/food/create`, {
            method: 'POST',
            body: JSON.stringify(Meal), 
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


