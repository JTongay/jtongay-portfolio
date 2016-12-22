app.service("Image", function(){
  this.selectedImg = [];

  this.addToSelected = function(arr){
    this.selectedImg = arr;
  }

  this.getImg = function(){
    return this.selectedImg;
  }

})
