import { _decorator, Component, Node } from 'cc';
import { Data } from './DataController';

const { ccclass, property } = _decorator;

@ccclass('CusHttp')

export class CusHttp extends Component {
    _callback = {};
    _obj;
    
    start() {

    }

    Get(url, cb, obj){
        this._callback[url] = cb; // 避免CB被覆蓋,故用url當作_callback的屬性做區分
        this._obj = obj;
        
        fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'text/plain;charset=UTF-8',
                "Authorization": "Bearer " + Data.Game.GameToken,
            },
            referrerPolicy: "strict-origin-when-cross-origin",
        })
        .then(function(response) {
            console.log("get response");
            console.log(response);
            // cc.log(response.text());

            return response.text(); // 解析文字資料
        }.bind(this))
        .then(function(text) {
            // 在這裡處理接收到的文字資料
            console.log("Text received:", text);
            
            this._result(text, url);
        }.bind(this))
        .catch(function(error) {
            console.log("get error");
            console.log(error);
        }.bind(this));
    }

    // fetch
    Post(url, cb, obj, data) {
        this._callback[url] = cb; // 避免CB被覆蓋,故用url當作_callback的屬性做區分
        this._obj = obj;
        
        fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + Data.Game.GameToken,
            },
            referrerPolicy: "strict-origin-when-cross-origin",
            body: JSON.stringify(data),
        })
        .then(function(response) {
            console.log("post response");
            console.log(response);

            return response.text(); // 解析文字資料
        }.bind(this))
        .then(function(text) {
            // 在這裡處理接收到的文字資料
            console.log("Text received:", text);
            
            this._result(text, url);
        }.bind(this))
        .catch(function(error) {
            console.log("post error");
            console.log(error);
        }.bind(this));
    }

    //fetch
    Patch(url, cb, obj, data) {
        this._callback[url] = cb; // 避免CB被覆蓋,故用url當作_callback的屬性做區分
        this._obj = obj;
        
        fetch(url, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + Data.Game.GameToken,
            },
            referrerPolicy: "strict-origin-when-cross-origin",
            body: JSON.stringify(data),
        })
        .then(function(response) {
            console.log("post response");
            console.log(response);

            return response.text(); // 解析文字資料
        }.bind(this))
        .then(function(text) {
            // 在這裡處理接收到的文字資料
            console.log("Text received:", text);
            
            this._result(text, url);
        }.bind(this))
        .catch(function(error) {
            console.log("post error");
            console.log(error);
        }.bind(this));
    }

    //fetch
    Put(url, cb, obj, data) {
        this._callback[url] = cb; // 避免CB被覆蓋,故用url當作_callback的屬性做區分
        this._obj = obj;
        
        fetch(url, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + Data.Game.GameToken,
            },
            referrerPolicy: "strict-origin-when-cross-origin",
            body: JSON.stringify(data),
        })
        .then(function(response) {
            console.log("post response");
            console.log(response);

            return response.text(); // 解析文字資料
        }.bind(this))
        .then(function(text) {
            // 在這裡處理接收到的文字資料
            console.log("Text received:", text);
            
            this._result(text, url);
        }.bind(this))
        .catch(function(error) {
            console.log("post error");
            console.log(error);
        }.bind(this));
    }

    _result(text, url) {
        let data = null

        if(text != ''){
            data = JSON.parse(text);
        }
        else{
            data = undefined;
        }

        if (this._callback[url] && data !== undefined) {
            // cc.log(data);
            this._callback[url].apply(this._obj, [data, this._obj]);

            delete this._callback[url];
        }
    }
}

