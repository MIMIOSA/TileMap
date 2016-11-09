
class Player {
    public PlayerBitmap: egret.Bitmap;
    private ifIdle: boolean;
    private ifWalk: boolean;
    private GoRight: boolean = false;
    private GoLeft: boolean = false;
    private IdleOrWalkStateMachine: StateMachine;
    private LeftOrRightStateMachine: StateMachine;
    public MyPhoto: egret.Bitmap;

    constructor() {
        this.MyPhoto = this.createBitmapByName("sta1_png");
        this.PlayerBitmap = new egret.Bitmap();
        this.PlayerBitmap.width = 64;
        this.PlayerBitmap.height = 64;

        this.PlayerBitmap.anchorOffsetX = this.MyPhoto.width / 2;    //锚点
        this.PlayerBitmap.anchorOffsetY = this.MyPhoto.height / 2;

        this.ifIdle = true;
        this.ifWalk = false;
        this.IdleOrWalkStateMachine = new StateMachine();
        this.LeftOrRightStateMachine = new StateMachine();

    }

    public SetPlayerBitmap(picture: egret.Bitmap) {
        this.PlayerBitmap = picture;
    }


    public SetIdle(set: boolean) {
        this.ifIdle = set;
    }

    public GetIfIdle(): boolean {
        return this.ifIdle;
    }

    public SetWalk(set: boolean) {
        this.ifWalk = set;
    }

    public GetIfWalk(): boolean {
        return this.ifWalk
    }

    public SetGoRight() {
        this.GoRight = true;
        this.GoLeft = false;
    }

    public GetIfGoRight(): boolean {
        return this.GoRight;
    }

    public SetGoLeft() {
        this.GoLeft = true;
        this.GoRight = false;
    }

    public GetIfGoLeft(): boolean {
        return this.GoLeft;
    }

    private createBitmapByName(name: string): egret.Bitmap {
        var result = new egret.Bitmap();
        var texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }

    public SetState(e: State, _tmain: Main) {
        this.IdleOrWalkStateMachine.setState(e, _tmain);
    }

    public SetRightOrLeftState(e: State, _tmain: Main) {
        this.LeftOrRightStateMachine.setState(e, _tmain);
    }


}