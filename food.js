class food{
    constructor(x,y){
        this.body = createSprite(x,y,30,30)
        this.body.debug = true
        this.body.setCollider("circle",0,0,30)
        grant=random([1,2])
        switch(grant){
            case 1:this.body.addImage(apple);
            this.body.scale=0.15
            break;
            case 2:this.body.addImage(banana);
            this.body.scale=0.1
            break;
        }
    }
}