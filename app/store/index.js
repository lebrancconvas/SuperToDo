export const state = () => ({
  tasks: []
});

export const mutations = {
  ADD_TASK(state, task) {
    state.tasks = [{ content: task, isDone: false }, ...state.tasks];
    console.log(state.tasks);
  }
};
