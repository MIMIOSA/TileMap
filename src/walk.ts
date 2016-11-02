
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
    constructor(x: number, y: number, Player: Role) {
        this.Ty = y;
        this.Tx = x;
        this.Player = Player;

    }

    Load() {

        this.Player.Modle++;
        var xx = this.Tx - this.Player.x;
        var yy = this.Ty - this.Player.y;
        if (xx > 0) { this.Player.scaleX = 1; } else { this.Player.scaleX = -1; }
        var zz = Math.pow(xx * xx + yy * yy, 0.5);
        var time: number = zz / this.Player.MoveSpeed;
        this.timer = new egret.Timer(50, time);
        this.LeastTime = time;
        this.timer.addEventListener(egret.TimerEvent.TIMER, () => {
            this.Player.x += xx / time;
            this.Player.y += yy / time;
            this.LeastTime--;
            if (this.LeastTime < 1) {
                this.timer.stop();
                //        this.Player.Modle=-1;
                if (this.LeastTime > -10) { this.Player.Idle(); }//意味着是走停不是逼停
            }
        }, this);
        this.timer.start();
        this.Player.Playwalk(this.Player.MoveAni);
    }
    exit() {
        this.LeastTime = -10;
    }

}

class IdleState implements Sta {
    private Player: Role;
    constructor(Player: Role) {
        this.Player = Player;
    }
    Load() {
        this.Player.Modle = 0;
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