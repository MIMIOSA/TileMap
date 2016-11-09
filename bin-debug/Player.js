var Player = (function () {
    function Player() {
        this.GoRight = false;
        this.GoLeft = false;
        this.MyPhoto = this.createBitmapByName("sta1_png");
        this.PlayerBitmap = new egret.Bitmap();
        this.PlayerBitmap.width = 64;
        this.PlayerBitmap.height = 64;
        this.PlayerBitmap.anchorOffsetX = this.MyPhoto.width / 2; //锚点
        this.PlayerBitmap.anchorOffsetY = this.MyPhoto.height / 2;
        this.ifIdle = true;
        this.ifWalk = false;
        this.IdleOrWalkStateMachine = new StateMachine();
        this.LeftOrRightStateMachine = new StateMachine();
    }
    var d = __define,c=Player,p=c.prototype;
    p.SetPlayerBitmap = function (picture) {
        this.PlayerBitmap = picture;
    };
    p.SetIdle = function (set) {
        this.ifIdle = set;
    };
    p.GetIfIdle = function () {
        return this.ifIdle;
    };
    p.SetWalk = function (set) {
        this.ifWalk = set;
    };
    p.GetIfWalk = function () {
        return this.ifWalk;
    };
    p.SetGoRight = function () {
        this.GoRight = true;
        this.GoLeft = false;
    };
    p.GetIfGoRight = function () {
        return this.GoRight;
    };
    p.SetGoLeft = function () {
        this.GoLeft = true;
        this.GoRight = false;
    };
    p.GetIfGoLeft = function () {
        return this.GoLeft;
    };
    p.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    p.SetState = function (e, _tmain) {
        this.IdleOrWalkStateMachine.setState(e, _tmain);
    };
    p.SetRightOrLeftState = function (e, _tmain) {
        this.LeftOrRightStateMachine.setState(e, _tmain);
    };
    return Player;
}());
egret.registerClass(Player,'Player');
//# sourceMappingURL=Player.js.map