module.exports =  class CheckDataType{
    constructor(){
            
    }
    isInstance(first_data,second_data){
        this.val1 = first_data
        this.val2 = second_data
        if(typeof(this.val1) === typeof(this.val2)){
            return true
        }else{
            return false
        }
    }

}


