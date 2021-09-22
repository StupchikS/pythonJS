'use strict';

/**
 * @param {string[]} countries
 */
export  const getDropdown = (countries) => {
    
    return `
        <option value="">Please select</option>
        <option value=${countries[0]}>${countries[0]}</option>
        <option value=${countries[1]}>${countries[1]}</option>
        <option value=${countries[2]}>${countries[2]}</option> 
    `
};