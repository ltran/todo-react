var tasks = [
  'eat',
  'work',
  'sleep'
];

var TaskList = React.createClass({displayName: "TaskList",
  getInitialState: function () {
    // initiate tasks here
    console.log(this.props.tasks);
    this.setState({tasks: this.props.tasks});
    return;
  },
  whenClicked: function(order){
    // do something
    console.log(order);
  },
  render: function(){
    var taskNodes = this.state.tasks.map(function (task, i) {
      return React.createElement(Task, {task: task, order: i, clicked: that.whenClicked})
    });
    return ( React.createElement(Task, {clicked: this.whenClicked}) );
  }
});

var Task = React.createClass({displayName: "Task",
  getInitialState: function () {
    return null;
  },
  handleClick: function (e) {
    // Passing order of task
    this.props.clicked(order);
  },
  render: function () {
    return ( React.createElement("button", {type: "button", onClick: this.handleClick}) );
  }
});

React.render(React.createElement(TaskList, {tasks: tasks}) , document.body);
