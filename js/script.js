const ringButtons = document.querySelectorAll(".ring-button");
let productImageBase = "../images/";
ringButtons.forEach((ringBtn) => {
  ringBtn.addEventListener("click", (event) => {
    // const color = event.target.id.replace('-color', '')
    const color = event.target.id.split("-").at(0);

    ringButtons.forEach((button) => {
      button.classList.remove("border-purple-600");
      button.classList.add("border-gray-300");
    });

    event.target.classList.add("border-purple-600");
    event.target.classList.remove("border-gray-300");

    const productImage = document.getElementById("product-image");
    productImage.src = `${productImageBase}${color}.png`
    
  });
});
