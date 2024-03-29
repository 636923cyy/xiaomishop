import {DataStore} from "./DataStore.js";

//所有精灵的基类
export class Spirit {

    constructor(image,srcX = 0,srcY = 0,cutWidth = image.width,cutHeight = image.height,
                x = 0,y = 0,width = image.width,height = image.height){
        this.image = image;
        this.srcX = srcX;
        this.srcY = srcY;
        this.cutWidth = cutWidth;
        this.cutHeight = cutHeight;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.dataStore =DataStore.getInstance();
    }

    //绘制自己
    draw() {
        this.dataStore.ctx.drawImage(this.image,this.srcX,
            this.srcY,this.cutWidth,this.cutHeight,
            this.x,this.y,this.width,this.height);
    }
}