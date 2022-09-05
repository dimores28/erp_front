<template>
  <main class="v-main main">
    <div class="container main__content">
      <div class="client">
        <label for="client">Клиент №:</label>
        <select id="client" class="selector" v-model="select">
          <option
            v-for="client in clients"
            :key="client.ID_CLIENT"
            :value="client.ID_DEP_CLIENT"
          >
            {{ client.ID_DEP_CLIENT }}
          </option>
        </select>
      </div>

      <button class="btn" @click="Add">Создать Проект</button>

      <div class="project">
        <label for="project">Проект №:</label>
        <select id="project" class="selector" @change="changeProject($event)">
          <option
            v-for="(pr, i) in projects"
            :key="pr.ID"
            :value="pr.ID_DEP_CLIENT"
            :selected="i == 0"
          >
            {{ pr.ID_PROJECT }}
          </option>
        </select>
      </div>
    </div>
  </main>
</template>

<script>
import { loadClient, loadProject, AddProject } from "@/api";
export default {
  name: "Main",
  data() {
    return {
      clients: null,
      select: null,
      projects: null
    };
  },
  methods: {
    async Add() {
      const date = new Date().toISOString().slice(0, 10).replace(/-/g, "");

      if (this.select) {
        const id_project = this.select + "-" + date;
        console.log(id_project);
        await AddProject(this.select, id_project);
        this.projects = await loadProject();
      }
    },
    changeProject(e) {
      console.log(e.target.value);
      this.select = e.target.value;
    }
  },
  async mounted() {
    this.clients = await loadClient();
    // this.projects = await loadProject();
  }
};
</script>

<style lang="less">
.main {
  text-align: left;
  padding-top: 30px;
}

.client {
  margin-bottom: 30px;
}

.project {
  margin: 30px 0;
}

.selector {
  margin: 0 15px;
  padding: 6px 10px;
  border: none;
  border-bottom: 1px solid #7d91bd;
  width: 180px;
}
</style>
