var tasks = [
  'eat',
  'work',
  'sleep'
];

var TaskList = React.createClass({displayName: "TaskList",
  getInitialState: function () {
    // initiate tasks here
    console.log(this.props.tasks);
    refinedTasks = this.props.tasks.map(function(task, i) {
      return {title: task, order: i};
    })
    return {tasks: refinedTasks};
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
    var currentOrder = this.props.order;
    this.props.clicked(currentOrder);
  },
  render: function () {
    var disabled = (this.props.task.locked) ? true : false;

    return (
      React.createElement("div", null, 
        React.createElement("span", {class: "description"},  this.props.task.title), " ", 
        React.createElement("button", {type: "button", onClick: this.handleClick, "data-order": this.props.order, disabled: disabled})
      )
    );
  }
});

React.render(React.createElement(TaskList, {tasks: tasks}) , document.body);
