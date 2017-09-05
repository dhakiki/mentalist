class TaskStore {
  constructor () {
    this.tasks = [{ task: 'ya', completed: false, assignee: null}];
  };

	get completedTasksCount() {
    	return this.tasks.filter(
			todo => todo.completed === true
		).length;
    }

	report() {
		if (this.tasks.length === 0)
			return "<none>";
		return `Next todo: "${this.tasks[0].task}". ` +
			`Progress: ${this.completedTasksCount}/${this.tasks.length}`;
	}

  addTask(task) {
		this.tasks.push({
			task: task,
			completed: false,
      assignee: null
		});
	}
};

export default new TaskStore();
