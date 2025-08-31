function showInfo() {
  const category = document.getElementById("category").value;
  const info = document.getElementById("info");

  let content = "";

  switch (category) {
    case "agriculture":
      content = "<h2>Agriculture</h2><p>This is the first step in food production. It includes growing crops, raising livestock, and using sustainable farming methods.</p>";
      break;
    case "processing":
      content = "<h2>Processing</h2><p>Raw food materials are cleaned, packaged, and transformed into edible products in factories or kitchens.</p>";
      break;
    case "distribution":
      content = "<h2>Distribution</h2><p>Food is transported from farms and factories to markets, stores, and homes through supply chains.</p>";
      break;
    default:
      content = "";
  }

  info.innerHTML = content;
}