const calculate = () => {
  const surfaces = parseInt(document.getElementById("surface").value);
  const distancePlants = parseInt(
    document.getElementById("distancePlant").value
  );
  nPlant = Math.round(
    surfaces / (Math.pow(distancePlants, 2) * Math.cos(0.523599))
  );
  document.getElementById("results").innerHTML = nPlant;
};

calculate();
