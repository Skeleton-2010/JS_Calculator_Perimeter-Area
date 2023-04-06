let title = document.querySelector('.Title');
let buttonPerimeter = document.querySelector(".ButtonPerimeter");
let buttonArea = document.querySelector(".ButtonArea");
let inputWidth = document.querySelector(".InputWidth");
let inputHeight = document.querySelector(".InputHeight");
let output = document.querySelector(".Output");
let perimeter;
let area;

function CalculatePerimeter(){
    perimeter = (Number(inputWidth.value) + Number(inputHeight.value)) * 2;
    if (inputWidth.value == inputHeight.value){
        output.textContent = "Perimeter of square is " + perimeter;
    }else{
        output.textContent = "Perimeter of rectangle is " + perimeter;
    };
};

function CalculateArea(){
    area = Number(inputWidth.value) * Number(inputHeight.value);
    if (inputWidth.value == inputHeight.value){
        output.textContent = "Area of square is " + area;
    }else{
        output.textContent = "Area of rectangle is " + area;
    };
};

buttonArea.addEventListener("click", CalculateArea);
buttonPerimeter.addEventListener('click', CalculatePerimeter);
