const Csv=require('./csv');
const Json=require('./json');
const Txt=require('./txt');
class ConnectionFactory{
    typesfiles(type){
        switch(type){
            case 'Csv':
            return new Csv();

            case 'Json':
            return new Json();

            case 'Txt':
            return new Txt();
            
            default:{
                console.log('Unknown file  type...')
            }

        }

    }
}
module.exports = new ConnectionFactory();