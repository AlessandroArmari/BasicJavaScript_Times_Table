//This timeTablesBasic() prints timeTables from 1 to 10 sequencely

function timeTablesBasic() {
  for (i = 1; i < 11; i++) {
    for (y = 1; y < 11; y++) {
      if (y == 1) {
        console.log("+++From now on time table: " + i + "+++");
      }
      console.log(i * y);
    }
  }
}
timeTablesBasic();

/*
The function timeTablesInArray() has 4 parameters:

timeTableFrom: the time table we want the sequence to start from
timeTableUntil: the time table we want the sequence to start at
multiplyFrom:  the multiplier we want each time table to start from
multiplyUntil: the multiplier we want each time table to ends at

So we can choose wich time tables and multiplier to print and see on console! 
*/

function timeTablesInArray(
  timeTableFrom,
  timeTableUntil,
  multiplyFrom,
  multiplyUntil
) {
  for (i = timeTableFrom; i <= timeTableUntil; i++) {
    var container = []; //Here we create a container to use it later
    for (y = multiplyFrom; y <= multiplyUntil; y++) {
      if (y == multiplyFrom) {
        console.log(
          "+++From now on time table: " +
            i +
            ", starting multiplying from: " +
            multiplyFrom +
            ", until: " +
            multiplyUntil
        );
      }
      container.push(i * y); //now we push each result in the container array so we will have the whole time table in the container array. But, everytime the time table ends, the container will be emptied as line 33 and the new time table will be pushed in it back.
    }
    console.log(container);
  }
}

timeTablesInArray(4, 8, 10, 13);
