 function getCircleArea() {
        let radiusInput = document.getElementById("radius").value;

        radiusInput = radiusInput.trim();

        let radius = Number(radiusInput);

        if (isNaN(radius) || radius <= 0) {
            alert("Please enter a valid positive number for the radius.");
            return;
        }

        let area = Math.PI * Math.pow(radius, 2);   

        document.getElementById("circle-area").value = area
    }


    function getTriangleArea() {
        let baseInput = document.getElementById("base").value;
        let heightInput = document.getElementById("height").value;

        baseInput = baseInput.trim();
        heightInput = heightInput.trim();

        let base = Number(baseInput);
        let height = Number(heightInput);

        if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
            alert("Please enter valid positive numbers for the base and height.");
            return;
        }

        let area = 0.5 * base * height;
        document.getElementById("triangle-area").value = area;
    }

    function getSquareArea() {
        let sideInput = document.getElementById("side").value;   

        sideInput = sideInput.trim();   

        let side = Number(sideInput);

        if (isNaN(side) || side <= 0) {
            alert("Please enter a valid positive number for the side.");
            return;
        }

        let area = Math.pow(side, 2);   
        document.getElementById("square-area").value = area;
    }

    function getRectangleArea() {
        let lengthInput = document.getElementById("length").value;
        let widthInput = document.getElementById("width").value;

        lengthInput = lengthInput.trim();
        widthInput = widthInput.trim();

        let length = Number(lengthInput);
        let width = Number(widthInput);

        if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
            alert("Please enter valid positive numbers for the length and width.");
            return;
        }

        let area = length * width;
        document.getElementById("rectangle-area").value = area;
    }