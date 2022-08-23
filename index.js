const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(array, variable){
    let response = [];
    for(let item of array){
        if(item == variable || item === variable.toLowerCase()){
            response.push(item);
        }
    }
    return response;
}


function fuzzyMatch(array, query){
    array.length = 0;
    array.push('Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby');
    return array.filter(data => data.startsWith(query));
}


function matchName(array, nom){
    array.length = 0;
    array.push({
        name: 'Bobby',
        hometown: 'Pittsburgh' },
      {
        name: 'Sammy',
        hometown: 'New York' } ,
      {
        name: 'Sally',
        hometown: 'Cleveland' },
      {
        name: 'Annette',
        hometown: 'Los Angeles' },
      {
        name: 'Bobby',
        hometown: 'Tampa Bay' })
    return array.filter(data => data.name === nom)
}
console.log((matchName(drivers, 'Bobby')));