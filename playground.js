class Playground {
    constructor(width, height, parentElementID){
        this.width = width;
        this.height = height;
        this.parentElementID = parentElementID;
        this.background_lyr0 = document.createElement("canvas");
        this.objects_lyr1 = document.createElement('canvas');
        this.borderWidth = '5px'
    }

    newBackgroundLayer() {
        this.background_lyr0.width = this.width;
        this.background_lyr0.height = this.height;
        this.ctx0 = this.background_lyr0.getContext('2d');
        this.background_lyr0.id=("background_lyr0");
        this.background_lyr0.style.cssText = 'z-index:0; background-color: lightgoldenrodyellow;border-style: solid;border-width:5px ;border-color: lightblue;'
        document.getElementById(this.parentElementID).insertAdjacentElement('beforeend', this.background_lyr0);
    }
    
    newObjectsLayer() {
        const color = 'transparent';
        this.objects_lyr1.width = this.width;
        this.objects_lyr1.height = this.height;
        this.ctx1 = this.objects_lyr1.getContext('2d');
        this.objects_lyr1.id=("objects_lyr1");
        this.objects_lyr1.style.cssText = `background-color:${color}; z-index: 1;border-style: solid;border-width:5px ;border-color: ${color};`
        document.getElementById(this.parentElementID).insertAdjacentElement('afterbegin', this.objects_lyr1);
    }

    start() {
        this.newBackgroundLayer();
        this.newObjectsLayer();
    }
}