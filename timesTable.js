//This timesTablesBasic() prints timesTables from 1 to 10 sequencely

function timesTablesBasic() {
  for (i = 1; i < 11; i++) {
    for (y = 1; y < 11; y++) {
      if (y == 1) {
        console.log("+++From now on time table: " + i + "+++");
      }
      console.log(i * y);
    }
  }
}
timesTablesBasic();

/*
The function timesTablesInArray() has 4 parameters:

timesTableFrom: which time table we want the sequence to start from
timesTableUntil: which time table we want the sequence to end at
multiplyFrom:  the multiplier we want each time table to start from
multiplyUntil: the multiplier we want each time table to ends at

So we can choose wich times table and multiplier to print and see on console! 
*/

function timesTablesInArray(
  timesTableFrom,
  timesTableUntil,
  multiplyFrom,
  multiplyUntil
) {
  for (i = timesTableFrom; i <= timesTableUntil; i++) {
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
      container.push(i * y); //now we push each result in the container array so we will have the whole times table in the container array. But, everytime eanch times table ends, the container will be emptied as line 33 and the new times table will be pushed in it back.
    }
    console.log(container);
  }
}

timesTablesInArray(4, 8, 10, 13);
