
interface State{
    OnState(_tmain : Main);

    ExitState(_tmain : Main);

}

class PeopleState implements State{
      OnState(_tmain : Main){};

      ExitState(_tmain : Main){};
}

class StateMachine{
     CurrentState : State;

     setState( e : State , _tmain : Main){
        if( this.CurrentState != null){
           this.CurrentState.ExitState(_tmain);
        }
        this.CurrentState = e;
        this.CurrentState.OnState(_tmain);
     }
}


class IdleState implements PeopleState{

    OnState(_tmain : Main){
        _tmain.player.SetIdle(true);
        _tmain.player.SetWalk(false);
    };

    ExitState(_tmain : Main){
        _tmain.player.SetIdle(false);
    };

}

class WalkingState implements PeopleState{
      OnState(_tmain : Main){
        _tmain.player.SetIdle(false);
        _tmain.player.SetWalk(true);
    };

    ExitState(_tmain : Main){
        _tmain.player.SetWalk(false);
    };
}

class GoRightState implements PeopleState{
    OnState(_tmain : Main){
        _tmain.player.SetGoRight();
    };

    ExitState(_tmain : Main){};

}

class GoLeftState implements PeopleState{
    OnState(_tmain : Main){
        _tmain.player.SetGoLeft();
    };

    ExitState(_tmain : Main){};

}