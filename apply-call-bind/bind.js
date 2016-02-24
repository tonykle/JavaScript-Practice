// BIND TAKES THE 'THIS' CONTEXT YOU'RE BINDING

var honda = {
  manufact : "Honda",
  year : 1999,
  getCarInfo : function(opt) {
    if (opt) {
      console.log(this.manufact + " " + this.year + " " + opt);
    } else {
      console.log(this.manufact + " " + this.year);
    }
  }
}

var toyota = {
  manufact : "Toyota",
  year : 1998,
  getCarInfo : function() {
    console.log("toyota's own getCarInfo function");
  }
}

var toyotaUseHonda = honda.getCarInfo.bind(toyota, "my OPT");
toyotaUseHonda();
honda.getCarInfo();

function secondUse(arg1) {
  console.log(this.manufact);
  console.log(arg1);
}

var toyotaUseAnother = secondUse.bind(toyota, "hello")();
