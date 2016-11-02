
interface Sta {
    Load();
    exit();

}

class MoveState implements Sta {
    private Tx: number;
    private Ty: number;
    private Player: Role;
    private timer: egret.Timer;
    private LeastTime: number;
    public Lj: Array<node>;
    public nowNode: number = 0;

    public ArriveListener:egret.Sprite=new egret.Sprite();

    constructor(Ps: Array<node>, Player: Role) {
        this.Lj = Ps;
        this.Player = Player;

    }

    ArriveAndGoNextNodeListener(evt: FinishWalkEvent) {
        this.nowNode++;
        if (this.nowNode < this.Lj.length) {
            this.Move();
        }
        else this.Player.Idle();
    }

    Move() {

        var M = this.Player.Modle;
        this.Tx = this.Lj[this.nowNode].x;
        this.Ty = this.Lj[this.nowNode].y;
        var xx = this.Tx - this.Player.x;
        var yy = this.Ty - this.Player.y;
        if (xx > 0) { this.Player.scaleX = -1; } else { this.Player.scaleX = 1; }
        var zz = Math.pow(xx * xx + yy * yy, 0.5);
        var time: number = zz / this.Player.MoveSpeed;
        this.timer = new egret.Timer(50, time);
        this.LeastTime = time;
        this.timer.start();

        this.timer.addEventListener(egret.TimerEvent.TIMER, () => {
            this.Player.x += xx / time;
            this.Player.y += yy / time;
            this.LeastTime--;
            if (this.LeastTime < 1) {
                this.timer.stop();

                if (this.LeastTime > -10) {

                    var IFW: FinishWalkEvent = new FinishWalkEvent(FinishWalkEvent.FW);
                    this.ArriveListener.dispatchEvent(IFW);
                }//意味着是走停不是逼停

            }
        }, this);


    }
    Load() {
        if (this.Lj.length > 1)
            this.nowNode = 1;
        else this.nowNode = 0;
        this.ArriveListener.addEventListener(FinishWalkEvent.FW, this.ArriveAndGoNextNodeListener, this);
        this.Player.nowDoing = 1;
        this.Player.Modle++;
        this.Player.Playwalk(this.Player.MoveAni);
        this.Move();
    }
    exit() {
        this.LeastTime = -10;
        this.ArriveListener.removeEventListener(FinishWalkEvent.FW, this.ArriveAndGoNextNodeListener, this);
    }
}

class IdleState implements Sta {
    private Player: Role;
    constructor(Player: Role) {
        this.Player = Player;
    }
    Load() {
         this.Player.Modle++;
     this.Player.nowDoing=0;
     this.Player.Playwalk(this.Player.IdleAni);

    }
    exit() {
    }

}

class StaMac {
    private nowSta: Sta;

    public Reload(S: Sta): void {
        if (this.nowSta) {
            this.nowSta.exit();
        }
        this.nowSta = S;
        this.nowSta.Load();
    }
}