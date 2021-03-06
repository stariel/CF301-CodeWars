// use map to double

function double(array) {
    return array.map(num => num * 2);
 };

 // List Filtering

 function filter_list(list) {
    return list.filter(item => typeof item === 'number');
  }

  // Calculate Average

  function find_average(array) {
    return (array.reduce((acc, cur) => acc + cur))/array.length;
  }