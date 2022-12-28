<template>
  <div>
    <header>
      <div>
        <h1>Super To Do List</h1>
      </div>
    </header>
    <section id="input-section">
      <div>
        <Form>
          <Input v-model="task" placeholder="Add a new task" style="width: 300px" />
          <Button type="success" @click="addTask">Add</Button>
        </Form>
      </div>
    </section>
    <section id="list-section">
      <div>
        <h2>Task List</h2>
      </div>
      <div v-for="(tasklist, index) in tasks" id="task-list" :key="index">
        <Card style="width:500px">
          <template #title>
            <h2>{{ tasklist.content }}</h2>
          </template>
          <div id="action">
            <Button type="success">Done</Button>
            <Button type="warning">Edit</Button>
            <Button type="error">Delete</Button>
          </div>
        </Card>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        task: "",
        tasks: []
      }
    },
    methods: {
      addTask() {
        if(this.task) {
          this.$store.commit('ADD_TASK', this.task);
          this.talk = "";
        }
      }
    }
  }
</script>

<style scoped>
  * {
    text-align: center;
  }

  #task-list {
    margin: 10px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
