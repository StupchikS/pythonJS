'use strict';

/**
 * @param {Object} course
 * @param {number} [course.id]
 * @param {string} [course.name]
 * @param {number} [course.year]
 */
 const visualizeEntries = course => {
	return Object.entries(course);
 }
// Sample usage - do not modify
console.log(visualizeEntries({id: 1, name: "Learn JavaScript", year: 2021}));
// [ [ 'id', 1 ], [ 'name', 'Learn JavaScript' ], [ 'year', 2021 ] ]

console.log(visualizeEntries({name: "Learn JavaScript", category: "Programming"}));
// [ [ 'name', 'Learn JavaScript' ], [ 'category', 'Programming' ] ]

console.log(visualizeEntries({})); // []