var TaskList = React.createClass({displayName: "TaskList",
  getInitialState: function(){
    // initiate tasks here
    this.tasks = [
      'eat',
      'work',
      'sleep'
    ];
  },
  whenClicked: function(order){
    // do something
    console.log(this.props);
  },
  render: function(){
    return ( React.createElement(Task, {clicked: this.whenClicked}) );
  }
});

var Task = React.createClass({displayName: "Task",
  handleClick: function (e) {
    // Passing order of task
    this.props.clicked(order);
  },
  render: function () {
    return ( React.createElement("button", {type: "button", onClick: this.handleClick}) );
  }
});
