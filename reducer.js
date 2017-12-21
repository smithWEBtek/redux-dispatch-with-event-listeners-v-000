let state;

function changeState(state = {count: 0}, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1};

    case 'ASDF': 
      alert('Mrs. McGillicuddy wants her pan back.')

    case 'ZXCV':
      document.getElementById('container').classList = 'blue'

    default:
      return state;
  }
}

function dispatch(action){
  state = changeState(state, action)
  render()
}
 
function render(){
  document.getElementById('container').textContent = state.count;
}


//https://blog.garstasio.com/you-dont-need-jquery/events/#listening-for-events
let button = document.getElementById('button');
let button2 = document.getElementById('button2');
let buttonBlue = document.getElementById('buttonBlue');

button.addEventListener('click', function() {
  dispatch({ type: 'INCREASE_COUNT' });
});

button2.addEventListener('click', function() {
  dispatch({ type: 'ASDF' });
});

buttonBlue.addEventListener('click', function() {
  dispatch({ type: 'ZXCV' });
});

dispatch({type: '@@INIT'})