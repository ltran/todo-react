var TaskList = React.createClass({displayName: "TaskList",
  getInitialState: function(){
    // initiate tasks here
    this.tasks = [
      'eat',
      'work',
      'sleep'
    ];
  },
  render: function(){
    return ( React.createElement(Task, {clicked: this.whenClicked}) );
  }
});

React.render(
  React.createElement("h1", null, "Hello, world!"),
  document.getElementById('todo')
);
var Task = React.createClass({displayName: "Task",
  handleClick: function (e) {
    // Passing order of task
    this.props.clicked(order);
  },
  render: function () {
    return ( React.createElement("button", {type: "button", onClick: this.handleClick}) );
  }
});
