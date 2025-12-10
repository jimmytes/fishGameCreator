import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Converter')
export class Converter extends Component {
    private static _instance: Converter;
    static get instance() {//沒有掛載此腳本在任何節點才可以new
        if (!this._instance) {
            this._instance = new Converter();
        }
        return this._instance;
    }
    onLoad() {
        
    }

    start() {

    }

    update(deltaTime: number) {
        
    }
    
    public g_format_cent_balance=function(cent_num){
        var cent=cent_num.toString();
        var decimal="";
        var integer="";
        var format="";
        var dot='.';
        if (cent < 100) {
            if (cent < 10) {
                format = '0' + dot + '0' + cent;
            } else {
                format = '0' + dot + cent;
            }
        } else {
            decimal = cent.substr(cent.length - 2, 2);
            integer = cent.substr(0, cent.length - 2);
            format = this.g_format_credit(integer);
            format = format + dot + decimal;
        }
        return format;
    };

    g_format_credit=function(credit_num){

        var credit=credit_num.toString();
    
        var invformat="";
        var format="";
        var comma=',';
    
        for (var i=0 ;i< credit.length ; i++){
            var c= credit.charAt(credit.length-i-1);
            if(i%3==0 && i!=0)
                invformat= invformat +comma+c;
            else
                invformat+=c;
        }
        for (var i=0 ;i< invformat.length ; i++) {
            format += invformat.charAt(invformat.length-i-1);
        }
        return format;
    };
}

