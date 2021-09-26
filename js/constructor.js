class Phone{
   

  constructor(model,ram,storage){
        this.model=model;
        this.ram=ram;
        this.storage=storage;
  }
full(){
    return this.model +"has " + this.ram
}
}
let phone1= new Phone("iPhone12",6,128)
let phone2= new Phone("Xiaomi",6,64)
let phone3= new Phone("Oppo",4,128)