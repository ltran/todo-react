var tasks = [
  'eat',
  'work',
  'sleep'
];

var TaskList = React.createClass({displayName: "TaskList",
  getInitialState: function () {
    // initiate tasks here
    console.log(this.props.tasks);
    return {tasks: this.props.tasks};
  },
  whenClicked: function(order){
    // do something
    console.log(order);
    return;
  },
  render: function(){
    var that = this;
    var taskNodes = this.state.tasks.map(function (task, i) {
      return React.createElement(Task, {task: task, order: i, clicked: that.whenClicked})
    });

    return (React.createElement("div", {class: "task-list"}, taskNodes ));
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
