const Csv=require('./csv');
const Json=require('./json');
const Txt=require('./txt');
const XML=require('./xml');
class ConnectionFactoryinterface{
    typesfiles(type){
        switch(type){
            case 'Csv':
            return new Csv();

            case 'Json':
            return new Json();

            case 'Txt':
            return new Txt();

            case 'XML':
            return new xml();
            
            default:{
                console.log('Unknown file  type...')
            }

        }

    }
}
module.exports = new ConnectionFactoryinterface();