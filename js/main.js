(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework
   var carImages = document.querySelectorAll('.data-ref'),
       modelName = document.querySelector('.modelName'),
       priceInfo = document.querySelector('.priceInfo'),
       modelInfo = document.querySelector('.modelDetails'),
       appliedClass;

       function changeElements() {
         let carIndex = carData[this.id];


         modelName.firstChild.nodeValue = carIndex.carName;
         priceInfo.firstChild.nodeValue = carIndex.price;
         modelInfo.innerHTML = carIndex.description;

         carImages.forEach(function(element, index){
           element.classList.add('nonActive');
         })

         this.classList.remove('nonActive');




     }



       carImages.forEach(function(element, index) {
    // loop through the images and add event handling to each one
    element.addEventListener('click', changeElements, false);
  });



})();
