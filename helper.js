function findLargestAndSmallest(dataset, key) {
  const objects = dataset.sort((object1, object2) => {
    if (object1[key] > object2[key]) {
      return 1;
    }

    if (object1[key] < object2[key]) {
      return -1;
    }

    return 0;
  });

  const smallest = objects[0];
  const largest = objects[objects.length - 1];

  return {
    smallest,
    largest,
  };
}

// validation = making sure our data is correct
// normalization = normalizing our data so that it is what we expect
// sanitization = making sure our data is clean

function findByName(dataset, name) {
  return dataset.find((obj) => {
    // Validation (here we make everything lowercase)
    return obj.name.toLowerCase() === name.toLowerCase();
  });
}

export { findLargestAndSmallest, findByName };
