class Role extends egret.DisplayObjectContainer {

    public nowDoing=0;
    public MyPhoto:egret.Bitmap;
    private MySta:StaMac=new StaMac;
    public MoveSpeed:number=20;
    public ChaTime:number=150;
    public Modle:number=0;
    public IdleAni:Array<egret.Texture>=new Array<egret.Texture>();
    public MoveAni:Array<egret.Texture>=new Array<egret.Texture>();

    public constructor() {
        super();
        this.MyPhoto = this.createBitmapByName("10000_png");
        this.addChild(this.MyPhoto);
        this.Loadpicture();
        this.anchorOffsetX = this.MyPhoto.width / 2;
        this.anchorOffsetY = this.MyPhoto.height / 2;
    }

    private Loadpicture() {
        var texture: egret.Texture = RES.getRes("10000_png");
        this.IdleAni.push(texture);   
        texture = RES.getRes("10001_png");
        this.IdleAni.push(texture);
        texture = RES.getRes("10002_png");
        this.IdleAni.push(texture);
        texture = RES.getRes("10003_png");
        this.IdleAni.push(texture);
        texture = RES.getRes("10004_png");
        this.IdleAni.push(texture);
        texture = RES.getRes("10005_png");
        this.IdleAni.push(texture);
        texture = RES.getRes("10006_png");
        this.IdleAni.push(texture);
        texture = RES.getRes("10007_png");
        this.IdleAni.push(texture);
        texture = RES.getRes("100002_png");
        this.MoveAni.push(texture);
        texture = RES.getRes("100012_png");
        this.MoveAni.push(texture);
        texture = RES.getRes("100022_png");
        this.MoveAni.push(texture);
        texture = RES.getRes("100032_png");
        this.MoveAni.push(texture);
        texture = RES.getRes("100042_png");
        this.MoveAni.push(texture);
        texture = RES.getRes("100052_png");
        this.MoveAni.push(texture);
        texture = RES.getRes("100062_png");
        this.MoveAni.push(texture);
        texture = RES.getRes("100072_png");
        this.MoveAni.push(texture);
    }

    public Playwalk(Ani: Array<egret.Texture>) {

        var count = 0;
        var Bit = this.MyPhoto;
        var M = this.Modle;
        var timer: egret.Timer = new egret.Timer(125, 0);

        timer.addEventListener(egret.TimerEvent.TIMER, Play, this);
        timer.start();

        function Play() {
            Bit.texture = Ani[count];
            if (count < Ani.length - 1) {
                count++;
            }
            else { count = 0; }
            if (this.Modle != M) { 
                timer.stop(); 
            }
        }

    }

    public Move(x: number, y: number) {

        var MS: MoveState = new MoveState(x, y, this);
        this.MySta.Reload(MS);

    }

    public Idle() {

        var IS: IdleState = new IdleState(this);
        this.MySta.Reload(IS);

    }

    private createBitmapByName(name: string): egret.Bitmap {
        var result = new egret.Bitmap();
        var texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
}

