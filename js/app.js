let iPhone12={
    model:"iPhone12",
    storage:128,
    color:["Gold","Silver","Midnight Green","Graphite"],
    isWaterproof:true,
    ram:6,

    showStorage:()=>iPhone12.model +"has"+iPhone12.storage+" GB",
    promotion(){
        return this.model +"has"+this.storage+" GB"
    }


}