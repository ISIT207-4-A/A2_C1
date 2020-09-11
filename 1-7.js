String.prototype.countDouble = function(s){
    var doubleCount =0;
    for(var i=0;i<this.length;i++){
        if(this[i]==this[i-1]){
            doubleCount++;
        }
    }
    console.log(doubleCount);
}

"Pdddtuup".countDouble();

