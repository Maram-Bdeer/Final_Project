const Connection=require('./controller')
class xml extends Connection{
    constructor(){
        super('xml')
    }
}
module.exports=xml;