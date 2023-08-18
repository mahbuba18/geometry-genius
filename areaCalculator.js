function calculateTriangleArea(){

    const baseField=document.getElementById('triangle-base');
    const baseInputValueString=baseField.value;
    const baseInputValue=parseFloat(baseInputValueString);
    
    const heightField=document.getElementById('triangle-height');
    const heightInputValueString=heightField.value;
    const heightInputValue=parseFloat(heightInputValueString);

    const area=0.5*baseInputValue*heightInputValue;

    const areaField=document.getElementById('triangle-area');
    areaField.innerText=area;
    console.log(areaField);

   

}
function calculateRectangleArea(){
    const weightField=document.getElementById('rectangle-weight');
    const weightInputValueString=weightField.value;
    const weightInputValue=parseFloat(weightInputValueString);
    
    const lengthField=document.getElementById('rectangle-length');
    const lengthInputValueString=lengthField.value;
    const lengthInputValue=parseFloat(lengthInputValueString);

    const area=weightInputValue*lengthInputValue;

    const areaField=document.getElementById('rectangle-area');
    areaField.innerText=area;
    console.log(areaField);


}
function calculateParallelogramArea(){
    const baseField=document.getElementById('parallelogram-base');
    const baseInputValueString=baseField.value;
    const baseInputValue=parseFloat(baseInputValueString);
    
    const heightField=document.getElementById('parallelogram-height');
    const heightInputValueString=heightField.value;
    const heightInputValue=parseFloat(heightInputValueString);

    const area=baseInputValue*heightInputValue;

    const areaField=document.getElementById('parallelogram-area');
    areaField.innerText=area;
    console.log(areaField);
}