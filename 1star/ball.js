class ball {

    x;
    y;
    size;

    constructor(x, y, size){

        this.x = x
        this.y = y
        this.size = size
    }

    display(){

        ellipse(this.x, this.y, this.size)
    }
}