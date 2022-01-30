const fetch = require('node-fetch');
const { resourceLimits } = require('worker_threads');

const getPeoplePromise = fetch => {
  return fetch("http://swapi.py4e.com/api/people")
		.then((response) => response.json())
		.then((data) => {
      
      return {
        count: data.count,
        result:data.results
      }
		});
}
getPeoplePromise(fetch);

const getPeople = async (fetch) => {
  const response = await fetch('http://swapi.py4e.com/api/people');
  const data = await response.json();
  console.log("async",data.count, data.results);
  return {
		count: data.count,
		result: data.results,
	};
}
getPeople(fetch);