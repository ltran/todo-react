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
  render: function(){
    var that = this;
    var taskNodes = this.state.tasks.map(function (task, i) {
      return React.createElement(Task, {task: task, order: i})
    });

    return (React.createElement("div", {class: "task-list"}, taskNodes ));
  }
});

var Task = React.createClass({displayName: "Task",
  handleClick: function (e) {
    // Passing order of task
    console.log('clicked');
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
