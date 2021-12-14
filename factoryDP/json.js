const Connection=require('./controller')
class json extends Connection{
    constructor(){
        super('json')
    }
}
module.exports=json;