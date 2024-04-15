document.addEventListener("DOMContentLoaded", function () {
  const numberFields = document.querySelectorAll("input");
  numberFields.forEach(function (field) {
    field.addEventListener("input", function () {
      const inputValue = field.value;
      const errorIcon = field.nextElementSibling;
      const tooltip = errorIcon.nextElementSibling;

      if (isNaN(inputValue)) {
        errorIcon.style.display = "inline-block";
        tooltip.style.display = "block";
      } else {
        errorIcon.style.display = "none";
        tooltip.style.display = "none";
      }
    });
  });

  document.getElementById("myform").addEventListener("submit", function (e) {
    e.preventDefault();
    var annualincome = parseFloat(
      document.getElementById("annualincome").value
    );

    var extraincomeinput = parseFloat(
      document.getElementById("extraincome").value
    );
    var extraincome = parseFloat(extraincomeinput) || 0;

    var age = document.getElementById("age").value;

    var deductionsinput = parseFloat(
      document.getElementById("deductions").value
    );
    var deductions = parseFloat(deductionsinput) || 0;

    var totalincome = annualincome + extraincome - deductions;
    var income = totalincome;

    if (totalincome > 800000) {
      if (age == "below40" && annualincome) {
        var tax = 0.3 * (totalincome - 800000);
        income = totalincome - tax;
      } else if (age == "between40&60" && annualincome) {
        var tax = 0.4 * (totalincome - 800000);
        income = totalincome - tax;
      } else if (age == "above60" && annualincome) {
        var tax = 0.1 * (totalincome - 800000);
        income = totalincome - tax;
      } else if (age == "") {
        alert("Enter a age");
      } else {
        console.log("Enter a annualincome");
      }
      localStorage.setItem("overallincome", income);
      window.location.href = "result.html";
    } else {
      alert("Your total income is not taxable");
      localStorage.setItem("overallincome", income);
      window.location.href = "result.html";
    }
  });
});
