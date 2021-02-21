<template>
  <div>
    <div :key="note.id" v-for="note in notes">
      <q-card class="my-card bg-primary text-white q-my-md">
        <q-card-section>
          <div class="text-h6">{{ note.title}}</div>
          <div class="">{{ note.content}}</div>
        </q-card-section>

        <q-separator dark/>

        <q-card-actions>
          <q-btn
            color="secondary"
            :to="`edit/${note.id}`"
          >Edit</q-btn>
          <q-btn
            color="deep-orange"
            @click="handleDelete(note)"
          >Delete</q-btn>
        </q-card-actions>
      </q-card>
    </div>

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn to="/add" fab icon="add" color="primary"></q-btn>
    </q-page-sticky>
  </div>
</template>

<script>
import NotesDAO from 'src/db/NotesDAO';

export default {
  name: 'PageIndex',

  data() {
    return {
      notes: [],
    };
  },
  mounted() {
    this.reflash();
  },

  methods: {
    async handleDelete(note) {
      await NotesDAO.getInstance().delete(note);
      this.reflash();
      this.$q.notify('刪除成功');
    },
    reflash() {
      NotesDAO.getInstance().get().then((result) => {
        console.log('result => ', result);
        this.notes = result;
      });
    },
  },
  created() {
    console.log(' PageIndex');
  },
};
</script>
