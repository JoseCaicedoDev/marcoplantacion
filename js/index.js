const showSelected = () => {
  const unitSelect = document.getElementById("units").value;
  switch (unitSelect) {
    case "":
      return 1;
    case "1":
      return 1;
    case "2":
      return 10000;
  }
};

const calculateStaggered = () => {
  const surfaces = parseInt(document.getElementById("surface").value);
  const totalSurface = surfaces * showSelected();
  const distancePlants = parseInt(
    document.getElementById("distancePlant").value
  );
  nPlant = Math.round(
    totalSurface / (Math.pow(distancePlants, 2) * Math.cos(0.523599))
  );
  document.getElementById("results").innerHTML = nPlant;
};

const calculateReal = () => {
  const surfaces = parseInt(document.getElementById("surface1").value);
  const totalSurface = surfaces * showSelected();
  const distancePlants = parseInt(
    document.getElementById("distancePlant1").value
  );
  nPlant = Math.round(totalSurface / Math.pow(distancePlants, 2));
  document.getElementById("results1").innerHTML = nPlant;
};

const calculateStreet = () => {
  const surfaces = parseInt(document.getElementById("surface2").value);
  const totalSurface = surfaces * showSelected();
  const distanceRows = parseInt(document.getElementById("distanceRow").value);
  const distancePlants = parseInt(
    document.getElementById("distancePlant2").value
  );
  const nPlant = Math.round(totalSurface / (distanceRows * distancePlants));
  document.getElementById("results2").innerHTML = nPlant;
};
