var tasks = [
  'eat',
  'work',
  'sleep'
];

var TaskList = React.createClass({displayName: "TaskList",
  getInitialState: function () {
    // initiate tasks here
    console.log(this.props.tasks);
    return null;
  },
  whenClicked: function(order){
    // do something
    console.log(order);
  },
  render: function(){
    return ( React.createElement(Task, {clicked: this.whenClicked}) );
  }
});

var Task = React.createClass({displayName: "Task",
  getInitialState: function () {

  },
  handleClick: function (e) {
    // Passing order of task
    this.props.clicked(order);
  },
  render: function () {
    return ( React.createElement("button", {type: "button", onClick: this.handleClick}) );
  }
});

React.renderComponent(React.createElement(TaskList, {tasks: tasks}) , document.body);
