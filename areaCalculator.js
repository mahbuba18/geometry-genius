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
  const base =getInputValue('parallelogram-base');
  const height= getInputValue('parallelogram-height');
  const area = base*height;
  setTextFieldText('parallelogram-area',area);
}
function getInputValue(fieldId){
    const inputField =document.getElementById(fieldId);
    const inputValueText= inputField.value;
    const value=parseFloat(inputValueText);
    return value;
}
function setTextFieldText(elementId,area){
   const element=document.getElementById(elementId);
   element.innerText=area;  
}