const Connection=require('./controller')
class csv extends Connection{
    constructor(){
        super('csv')
    }
}
module.exports=csv;


