var PeopleState = (function () {
    function PeopleState() {
    }
    var d = __define,c=PeopleState,p=c.prototype;
    p.OnState = function (_tmain) { };
    ;
    p.ExitState = function (_tmain) { };
    ;
    return PeopleState;
}());
egret.registerClass(PeopleState,'PeopleState',["State"]);
var StateMachine = (function () {
    function StateMachine() {
    }
    var d = __define,c=StateMachine,p=c.prototype;
    p.setState = function (e, _tmain) {
        if (this.CurrentState != null) {
            this.CurrentState.ExitState(_tmain);
        }
        this.CurrentState = e;
        this.CurrentState.OnState(_tmain);
    };
    return StateMachine;
}());
egret.registerClass(StateMachine,'StateMachine');
var IdleState = (function () {
    function IdleState() {
    }
    var d = __define,c=IdleState,p=c.prototype;
    p.OnState = function (_tmain) {
        _tmain.player.SetIdle(true);
        _tmain.player.SetWalk(false);
    };
    ;
    p.ExitState = function (_tmain) {
        _tmain.player.SetIdle(false);
    };
    ;
    return IdleState;
}());
egret.registerClass(IdleState,'IdleState');
var WalkingState = (function () {
    function WalkingState() {
    }
    var d = __define,c=WalkingState,p=c.prototype;
    p.OnState = function (_tmain) {
        _tmain.player.SetIdle(false);
        _tmain.player.SetWalk(true);
    };
    ;
    p.ExitState = function (_tmain) {
        _tmain.player.SetWalk(false);
    };
    ;
    return WalkingState;
}());
egret.registerClass(WalkingState,'WalkingState');
var GoRightState = (function () {
    function GoRightState() {
    }
    var d = __define,c=GoRightState,p=c.prototype;
    p.OnState = function (_tmain) {
        _tmain.player.SetGoRight();
    };
    ;
    p.ExitState = function (_tmain) { };
    ;
    return GoRightState;
}());
egret.registerClass(GoRightState,'GoRightState');
var GoLeftState = (function () {
    function GoLeftState() {
    }
    var d = __define,c=GoLeftState,p=c.prototype;
    p.OnState = function (_tmain) {
        _tmain.player.SetGoLeft();
    };
    ;
    p.ExitState = function (_tmain) { };
    ;
    return GoLeftState;
}());
egret.registerClass(GoLeftState,'GoLeftState');
//# sourceMappingURL=State.js.map