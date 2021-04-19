
class Ajax 
{

    private _xhr: XMLHttpRequest;

    private static DONE : number;
    private static OK : number;

     public constructor() {
        this._xhr = new XMLHttpRequest();
        Ajax.DONE = 4;
        Ajax.OK = 200;
    }

    public Post = (ruta: string, success: Function, params: string = ""):void =>
    {

        let parametros:string = params.length > 0 ? params : "";

        this._xhr.open('POST', ruta, true);
        this._xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
        this._xhr.send(parametros);

        this._xhr.onreadystatechange = ():void => {

            if (this._xhr.readyState === Ajax.DONE) {
                if (this._xhr.status === Ajax.OK) {
                    success(this._xhr.responseText);
                }
            }
        };
    };
}