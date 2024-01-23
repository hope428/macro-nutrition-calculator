let openRequest = indexedDB.open("frequentFoods", 1);

openRequest.onsuccess = function () {
  let db = openRequest.result;

  console.log(db);
};
