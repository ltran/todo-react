var React = require('react');

var tasks = [
  'eat',
  'work',
  'sleep'
];

var TaskList = React.createClass({
  getInitialState: function () {
    // initiate tasks here
    refinedTasks = this.props.tasks.map(function(task, i) {
      return {title: task, order: i, done: false};
    })
    return {tasks: refinedTasks};
  },
  whenClicked: function(order){
    // do something
    clickedTaskOrder = order;
    var revisedTasks = this.state.tasks.map(function(task, i) {
      if (clickedTaskOrder == i) {
        if (task.done) {
          task.done = false;
        } else {
          task.done = true;
        }
      }
      return task;
    });
    this.setState({ tasks:revisedTasks });
    return;
  },
  render: function(){
    var that = this;
    var taskNodes = this.state.tasks.map(function (task, i) {
      return <Task task={task} order={i} clicked={that.whenClicked} />
    });

    return (<div class="task-list">{ taskNodes }</div>);
  }
});

var Task = React.createClass({
  handleClick: function (e) {
    var currentOrder = this.props.order;
    this.props.clicked(currentOrder);
  },
  render: function () {
    var done = this.props.task.done ? "WIN!" : "LOSE!";
    return (
      <div>
        <span>{ this.props.task.title }</span>
        <button type="button" onClick={this.handleClick} data-order={this.props.order}>{ this.props.task.title }</button>
        <span>{ done }</span>
      </div>
    );
  }
});

React.render(<TaskList tasks={tasks}/> , document.body);
