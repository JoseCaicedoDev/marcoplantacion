const calculateStaggered = (btn) => {
  const form = document.getElementById("formCalculate_1");
  const formData = new FormData(form);
  let jsonData = {};
  for (var pair of formData.entries()) {
    jsonData[pair[0]] = pair[1];
  }

  console.log(jsonData);
  const surface = parseInt(jsonData.surface);
  const distancePlant = parseInt(jsonData.distancePlant);
  const unit = parseInt(jsonData.unit);

  nPlant = Math.round(
    (surface * unit) / (Math.pow(distancePlant, 2) * Math.cos(0.523599))
  );
  document.getElementById("results").innerHTML = nPlant;
};

const calculateReal = (btn) => {
  const form = document.getElementById("formCalculate_2");
  const formData = new FormData(form);
  let jsonData = {};
  for (var pair of formData.entries()) {
    jsonData[pair[0]] = pair[1];
  }

  console.log(jsonData);
  const surface = parseInt(jsonData.surface);
  const distancePlant = parseInt(jsonData.distancePlant);
  const unit = parseInt(jsonData.unit);

  nPlant = Math.round((surface * unit) / Math.pow(distancePlant, 2));
  document.getElementById("results1").innerHTML = nPlant;
};

const calculateStreet = (btn) => {
  const form = document.getElementById("formCalculate_3");
  const formData = new FormData(form);
  let jsonData = {};
  for (var pair of formData.entries()) {
    jsonData[pair[0]] = pair[1];
  }

  console.log(jsonData);
  const surface = parseInt(jsonData.surface);
  const distancePlant = parseInt(jsonData.distancePlant);
  const distanceRow = parseInt(jsonData.distanceRow);
  const unit = parseInt(jsonData.unit);

  const nPlant = Math.round((surface * unit) / (distanceRow * distancePlant));
  document.getElementById("results2").innerHTML = nPlant;
};

/* const calculateStaggered = () => {
  nPlant = Math.round(
    (surface * unit) / (Math.pow(distancePlant, 2) * Math.cos(0.523599))
  );
  document.getElementById("results").innerHTML = nPlant;
}; */

/* const calculateReal = () => {
  nPlant = Math.round((surface * unit) / Math.pow(distancePlant, 2));
  document.getElementById("results1").innerHTML = nPlant;
}; */

/* const calculateStreet = () => {
  const nPlant = Math.round((surface * unit) / (distanceRow * distancePlant));
  document.getElementById("results2").innerHTML = nPlant;
};
 */
