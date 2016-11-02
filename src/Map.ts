
var config = [
    { x: 1, y: 1, walkable: true, image: "grass_jpg" },
    { x: 2, y: 1, walkable: true, image: "grass_jpg" },
    { x: 3, y: 1, walkable: false, image: "tree_jpg" },
    { x: 4, y: 1, walkable: false, image: "tree_jpg" },
    { x: 5, y: 1, walkable: true, image: "grass_jpg" },
    { x: 6, y: 1, walkable: true, image: "grass_jpg" },
    { x: 7, y: 1, walkable: true, image: "grass_jpg" },
    { x: 8, y: 1, walkable: true, image: "grass_jpg" },
    { x: 9, y: 1, walkable: true, image: "grass_jpg" },
    { x: 10, y: 1, walkable: true, image: "grass_jpg" },
    { x: 1, y: 2, walkable: true, image: "grass_jpg" },
    { x: 2, y: 2, walkable: false, image: "tree_jpg" },
    { x: 3, y: 2, walkable: true, image: "grass_jpg" },
    { x: 4, y: 2, walkable: true, image: "grass_jpg" },
    { x: 5, y: 2, walkable: true, image: "grass_jpg" },
    { x: 6, y: 2, walkable: false, image: "tree_jpg" },
    { x: 7, y: 2, walkable: false, image: "tree_jpg" },
    { x: 8, y: 2, walkable: true, image: "grass_jpg" },
    { x: 9, y: 2, walkable: false, image: "tree_jpg" },
    { x: 10, y: 2, walkable: true, image: "grass_jpg" },
    { x: 1, y: 3, walkable: false, image: "tree_jpg" },
    { x: 2, y: 3, walkable: true, image: "grass_jpg" },
    { x: 3, y: 3, walkable: true, image: "grass_jpg" },
    { x: 4, y: 3, walkable: false, image: "tree_jpg" },
    { x: 5, y: 3, walkable: true, image: "grass_jpg" },
    { x: 6, y: 3, walkable: true, image: "grass_jpg" },
    { x: 7, y: 3, walkable: true, image: "grass_jpg" },
    { x: 8, y: 3, walkable: true, image: "grass_jpg" },
    { x: 9, y: 3, walkable: true, image: "grass_jpg" },
    { x: 10, y: 3, walkable: true, image: "grass_jpg" },
    { x: 1, y: 4, walkable: false, image: "tree_jpg" },
    { x: 2, y: 4, walkable: true, image: "grass_jpg" },
    { x: 3, y: 4, walkable: false, image: "tree_jpg" },
    { x: 4, y: 4, walkable: false, image: "tree_jpg" },
    { x: 5, y: 4, walkable: true, image: "grass_jpg" },
    { x: 6, y: 4, walkable: false, image: "tree_jpg" },
    { x: 7, y: 4, walkable: false, image: "tree_jpg" },
    { x: 8, y: 4, walkable: true, image: "grass_jpg" },
    { x: 9, y: 4, walkable: false, image: "tree_jpg" },
    { x: 10, y: 4, walkable: true, image: "grass_jpg" },
    { x: 1, y: 5, walkable: true, image: "grass_jpg" },
    { x: 2, y: 5, walkable: true, image: "grass_jpg" },
    { x: 3, y: 5, walkable: true, image: "grass_jpg" },
    { x: 4, y: 5, walkable: true, image: "grass_jpg" },
    { x: 5, y: 5, walkable: true, image: "grass_jpg" },
    { x: 6, y: 5, walkable: true, image: "grass_jpg" },
    { x: 7, y: 5, walkable: false, image: "tree_jpg" },
    { x: 8, y: 5, walkable: true, image: "grass_jpg" },
    { x: 9, y: 5, walkable: false, image: "tree_jpg" },
    { x: 10, y: 5, walkable: true, image: "grass_jpg" },
    { x: 1, y: 6, walkable: true, image: "grass_jpg" },
    { x: 2, y: 6, walkable: false, image: "tree_jpg" },
    { x: 3, y: 6, walkable: true, image: "grass_jpg" },
    { x: 4, y: 6, walkable: false, image: "tree_jpg" },
    { x: 5, y: 6, walkable: true, image: "grass_jpg" },
    { x: 6, y: 6, walkable: true, image: "grass_jpg" },
    { x: 7, y: 6, walkable: true, image: "grass_jpg" },
    { x: 8, y: 6, walkable: true, image: "grass_jpg" },
    { x: 9, y: 6, walkable: true, image: "grass_jpg" },
    { x: 10, y: 6, walkable: true, image: "grass_jpg" },
    { x: 1, y: 7, walkable: true, image: "grass_jpg" },
    { x: 2, y: 7, walkable: false, image: "tree_jpg" },
    { x: 3, y: 7, walkable: true, image: "grass_jpg" },
    { x: 4, y: 7, walkable: false, image: "tree_jpg" },
    { x: 5, y: 7, walkable: false, image: "tree_jpg" },
    { x: 6, y: 7, walkable: true, image: "grass_jpg" },
    { x: 7, y: 7, walkable: false, image: "tree_jpg" },
    { x: 8, y: 7, walkable: false, image: "tree_jpg" },
    { x: 9, y: 7, walkable: true, image: "grass_jpg" },
    { x: 10, y: 7, walkable: false, image: "tree_jpg" },
    { x: 1, y: 8, walkable: true, image: "grass_jpg" },
    { x: 2, y: 8, walkable: true, image: "grass_jpg" },
    { x: 3, y: 8, walkable: true, image: "grass_jpg" },
    { x: 4, y: 8, walkable: true, image: "grass_jpg" },
    { x: 5, y: 8, walkable: true, image: "grass_jpg" },
    { x: 6, y: 8, walkable: true, image: "grass_jpg" },
    { x: 7, y: 8, walkable: false, image: "tree_jpg" },
    { x: 8, y: 8, walkable: true, image: "grass_jpg" },
    { x: 9, y: 8, walkable: true, image: "grass_jpg" },
    { x: 10, y: 8, walkable: false, image: "tree_jpg" },
    { x: 1, y: 9, walkable: true, image: "grass_jpg" },
    { x: 2, y: 9, walkable: false, image: "tree_jpg" },
    { x: 3, y: 9, walkable: true, image: "grass_jpg" },
    { x: 4, y: 9, walkable: false, image: "tree_jpg" },
    { x: 5, y: 9, walkable: false, image: "tree_jpg" },
    { x: 6, y: 9, walkable: true, image: "grass_jpg" },
    { x: 7, y: 9, walkable: true, image: "grass_jpg" },
    { x: 8, y: 9, walkable: true, image: "grass_jpg" },
    { x: 9, y: 9, walkable: false, image: "tree_jpg" },
    { x: 10, y: 9, walkable: true, image: "grass_jpg" },
    { x: 1, y: 10, walkable: true, image: "grass_jpg" },
    { x: 2, y: 10, walkable: true, image: "grass_jpg" },
    { x: 3, y: 10, walkable: true, image: "grass_jpg" },
    { x: 4, y: 10, walkable: true, image: "grass_jpg" },
    { x: 5, y: 10, walkable: true, image: "grass_jpg" },
    { x: 6, y: 10, walkable: true, image: "grass_jpg" },
    { x: 7, y: 10, walkable: false, image: "tree_jpg" },
    { x: 8, y: 10, walkable: false, image: "tree_jpg" },
    { x: 9, y: 10, walkable: true, image: "grass_jpg" },
    { x: 10, y: 10, walkable: true, image: "grass_jpg" },
]

class MapKuai {
    public x: number;
    public y: number;
    public canW: boolean;
    public textag: number;
}

class DaMap extends egret.DisplayObjectContainer {
    public KuaiSize = 80;
    public MapKs: Array<MapKuai> = new Array<MapKuai>();
    public MapCs: Array<egret.DisplayObjectContainer> = new Array<egret.DisplayObjectContainer>();
    public W = 0;
    public H = 0;
    constructor() {
        super();
        this.LoadKs();
        //   RES.loadConfig("config.ts");
        this.LoadCs();

    }

    private LoadKs() {
        var OneK: MapKuai;
        for (var i = 0; i < config.length; i++) {
            OneK = config[i];
            this.MapKs.push(OneK);
            this.W = OneK.x + 1;
            this.H = OneK.y + 1;
        }
    }

    private LoadCs() {
        var OneC: egret.DisplayObjectContainer;
        for (var i = 0; i < this.MapKs.length; i++) {
            OneC = new egret.DisplayObjectContainer;
            OneC.x = this.MapKs[i].x * this.KuaiSize;
            OneC.y = this.MapKs[i].y * this.KuaiSize;
            if (this.MapKs[i].textag != 0) {
                var oneBit = this.createBitmapByName(this.LoadTu(this.MapKs[i]));
                OneC.addChild(oneBit);
            }
            this.MapCs.push(OneC);
            this.addChild(OneC);

        }
    }

    private LoadTu(MK: MapKuai): string {

        var name: string = config[MK.textag - 1].image;
        console.log(name);
        return name;
    }

    private createBitmapByName(name: string): egret.Bitmap {
        var result = new egret.Bitmap();
        var texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
}

class node {
    public x: number;
    public y: number;
    public f: number;
    public g: number;
    public h: number;
    public fn: node;
}

class Astar {
    public StartN: node = new node();
    public EndN: node = new node();;
    private nowN: node = new node();
    public IsOk = false;
    public EndNcanW = false;
    private W: number;
    private H: number;
    private Player: Role;
    private BM: DaMap;
    public Ps: Array<node> = new Array<node>();
    private O: Array<node> = new Array<node>();;
    private C: Array<node> = new Array<node>();;
    constructor(BM: DaMap, Pl: Role) {
        this.H = BM.H;
        this.W = BM.W;
        this.BM = BM;
        this.Player = Pl;
    }

    public jisuan(tx: number, ty: number) {
        this.Ps = new Array<node>();
        this.O = new Array<node>();
        this.C = new Array<node>();
        this.IsOk = false;
        this.EndNcanW = true;
        //    console.log("数组初始化完毕");
        this.EndN.x = tx;
        this.EndN.y = ty;
        this.StartN.x = Math.floor(this.Player.x / this.BM.KuaiSize);
        this.StartN.y = Math.floor(this.Player.y / this.BM.KuaiSize);
        this.StartN.g = 0;
        this.StartN.fn = this.StartN;
        this.nowN = this.StartN;
        this.sh(this.StartN);
        this.sf(this.StartN);
        this.O.push(this.StartN);


        if (this.isF(this.EndN)) {
            this.EndNcanW = false;
            //     console.log("终点不可走");
        }
        //     console.log("起点：x:"+this.nowN.x+"y:"+this.nowN.y);
        //     console.log("终点：x:"+this.EndN.x+"y:"+this.EndN.y);


        if (this.nowN.x == this.EndN.x && this.nowN.y == this.EndN.y) {
            this.IsOk = true;
            this.EndN.fn = this.nowN;
        }

        var t = 0;
        do {
            this.nowN = this.getgoodN();
            this.ZhaozhouweiN(this.nowN);
            this.C.push(this.nowN);
            t++;
            if (this.O.length <= 0 || this.IsOk) {
                break;
            }

            //    console.log("循环中...");
        } while (this.EndNcanW);
        //  console.log("第一个wh用了："+t);
        //  console.log("额外点赛了："+this.u);
        var Psfan: Array<node> = new Array<node>();
        if (this.EndNcanW) {
            Psfan.push(this.EndN);
        }


        do {
            Psfan.push(this.nowN);

            if (this.nowN.fn.x == this.StartN.x && this.nowN.fn.y == this.StartN.y) { break; }
            this.nowN = this.nowN.fn;
            //     console.log(" 数组...");
        } while (this.EndNcanW);

        var j = 0;
        for (var i = Psfan.length; i > 0; i--) {
            this.Ps.push(Psfan[i - 1]);
            //        console.log("x:"+this.Ps[j].x+"y:"+this.Ps[j].y);
            this.Ps[j].x = this.Ps[j].x * this.BM.KuaiSize + this.BM.KuaiSize / 2;
            this.Ps[j].y = this.Ps[j].y * this.BM.KuaiSize + this.BM.KuaiSize / 2;
            j++;
        }
        //   console.log("计算完毕");


    }
    public ZhaozhouweiN(n: node) {
        this.AddNtoO(n, n.x - 1, n.y - 1);
        this.AddNtoO(n, n.x, n.y - 1);
        this.AddNtoO(n, n.x + 1, n.y - 1);
        this.AddNtoO(n, n.x - 1, n.y);
        this.AddNtoO(n, n.x + 1, n.y);
        this.AddNtoO(n, n.x - 1, n.y + 1);
        this.AddNtoO(n, n.x, n.y + 1);
        this.AddNtoO(n, n.x + 1, n.y + 1);

    }

    public u = 0;
    public AddNtoO(fn: node, x: number, y: number) {
        if (x < 0 || y < 0 || x >= this.W || y >= this.H) { return; }
        var n: node = new node();
        n.x = x;
        n.y = y;



        if (this.IsinC(n) || this.isF(n) || this.IsinO(n)) {
            return;
        } else {
            n.fn = fn;
            this.sg(n); this.sh(n); this.sf(n);
            this.O.push(n);

            this.u++;

            if (this.EndN.x == n.x && this.EndN.y == n.y) {
                this.IsOk = true;
            }
        }

    }
    public IsinO(n: node): boolean {
        for (var i = 0; i < this.O.length; i++) {
            if (n.x == this.O[i].x && n.y == this.O[i].y)
                return true;
        }
        return false;
    }
    public IsinC(n: node): boolean {
        for (var i = 0; i < this.C.length; i++) {
            if (n.x == this.C[i].x && n.y == this.C[i].y)
                return true;
        }
        return false;

    }
    public isF(n: node): boolean {
        for (var i = 0; i < this.BM.MapKs.length; i++) {
            if (n.x == this.BM.MapKs[i].x && n.y == this.BM.MapKs[i].y && this.BM.MapKs[i].canW == false) {
                return true;
            }
        }
        return false;
    }
    public sh(n: node) {
        var xx = Math.max(n.x, this.EndN.x) - Math.min(n.x, this.EndN.x);
        var yy = Math.max(n.y, this.EndN.y) - Math.min(n.y, this.EndN.y);
        n.h = xx + yy;
    }
    public sg(n: node) {
        if (n.x != n.fn.x && n.y != n.fn.y) {
            n.g = n.fn.g + 1.4;
        } else {
            n.g = n.fn.g + 1;
        }

    }
    public sf(n: node) {
        n.f = n.g + n.h;
    }
    public getgoodN(): node {
        var gn: node;
        var gf = 999;
        var k: number;
        for (var i = 0; i < this.O.length; i++) {
            if (this.O[i].f < gf) {
                gf = this.O[i].f;
                k = i;
            }
        }
        gn = this.O[k];
        this.O[k] = this.O[0];
        this.O[0] = gn;
        return this.O.shift();
    }

}
