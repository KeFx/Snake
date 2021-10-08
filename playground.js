class Playground {
    constructor(rows, cols, baseUnitWidth, parentElementID) {
        this.rows = rows;
        this.cols = cols;
        this.baseUnitWidth = baseUnitWidth;
        this.width = this.cols * this.baseUnitWidth;
        this.height = this.rows * this.baseUnitWidth;
        this.parentElementID = parentElementID;
        this.background_lyr0 = document.createElement("canvas");
        this.objects_lyr1 = document.createElement('canvas');
        this.borderWidth = '1em';
        this.grid = this.newEmptyGrid();
    }

    newEmptyGrid() {
        const g = new Array(this.rows);
        for (let i = 0; i < g.length; i++) {
            g[i] = new Array(this.cols)
            for (let j = 0; j < g[i].length; j++) {
                g[i][j] = (i+j) % 2 === 0 ? "lightgoldenrodyellow" : '#f2e7b6';
            }
        }
        return g;
    }

    drawGrid() {
        for (let row = 0; row < this.grid.length; row++) {
            for (let col = 0; col < this.grid[row].length; col++) {
                console.log(this.grid[row][col]);
                drawRect(this.ctx0, col * this.baseUnitWidth, row * this.baseUnitWidth,
                    this.baseUnitWidth,
                    this.baseUnitWidth,
                    this.grid[row][col])
            }
        }
    }

    newBackgroundLayer(bgColor) {
        this.background_lyr0.width = this.width;
        this.background_lyr0.height = this.height;
        this.ctx0 = this.background_lyr0.getContext('2d');
        this.background_lyr0.id = ("background_lyr0");
        this.background_lyr0.style.cssText = `z-index:0; background-color:${bgColor};`
        document.getElementById(this.parentElementID).insertAdjacentElement('beforeend', this.background_lyr0);
    }

    newObjectsLayer(bgColor) {
        this.objects_lyr1.width = this.width;
        this.objects_lyr1.height = this.height;
        this.ctx1 = this.objects_lyr1.getContext('2d');
        this.objects_lyr1.id = ("objects_lyr1");
        this.objects_lyr1.style.cssText = `background-color:${bgColor}; z-index: 1;`
        document.getElementById(this.parentElementID).insertAdjacentElement('afterbegin', this.objects_lyr1);
    }

    start() {
        this.newBackgroundLayer('lightgoldenrodyellow');
        this.drawGrid();
        this.newObjectsLayer('transparent');
        
    }
}