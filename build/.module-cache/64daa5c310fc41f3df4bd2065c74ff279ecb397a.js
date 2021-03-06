var tasks = [
  'eat',
  'work',
  'sleep'
];

var TaskList = React.createClass({displayName: "TaskList",
  getInitialState: function () {
    // initiate tasks here
    refinedTasks = this.props.tasks.map(function(task, i) {
      return {title: task, order: i};
    })
    return {tasks: refinedTasks};
  },
  whenClicked: function(order){
    // do something
    clickedTaskOrder = order;

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
  handleClick: function (e) {
    var currentOrder = this.props.order;
    this.props.clicked(currentOrder);
  },
  render: function () {
    return (
      React.createElement("div", null, 
        React.createElement("span", null, this.props.task.title), 
        React.createElement("button", {type: "button", onClick: this.handleClick, "data-order": this.props.order},  this.props.task.title)
      )
    );
  }
});

React.render(React.createElement(TaskList, {tasks: tasks}) , document.body);
