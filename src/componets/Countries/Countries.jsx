/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Countries = () => {
    const countries = useLoaderData();
    console.log(countries);
    return (
        <div>
            <h3>All Countries: {countries.length}</h3>
            <ul>
                {
                    countries.map(country => <li key={country.cca2}> {country.name.common}</li>)
                }
            </ul>
        </div>
    );
};

export default Countries;