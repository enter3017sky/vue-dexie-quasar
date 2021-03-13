<template>
  <q-form @submit="save" class="q-gutter-md">
    <q-input
      outlined
      v-model="note.title"
      label="Title"
    />

    <q-input
      outlined
      type="textarea"
      v-model="note.content"
      label="Content"
    />

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn type="submit" fab icon="done_all" color="primary"></q-btn>
    </q-page-sticky>
  </q-form>
</template>

<script>
import NotesDAO from 'src/db/NotesDAO';

// import Note from 'src/modules/Note';
// console.log('Note', Note);

export default {
  name: 'Editor',
  props: {
    noteId: {
      type: Number,
      required: false,
    },
  },

  data() {
    return {
      note: {},
    };
  },
  created() {
    console.log(' Editor/created', this.note);

    if (this.noteId) {
      this.editData();
    }
  },
  mounted() {
    console.log('this.noteId', this.noteId);
  },
  methods: {
    editData() {
      NotesDAO.getInstance().getById(this.noteId).then((note) => {
        console.log(note);
        this.note = note;

        // this.$q.notify(' Save note successfully');
        // this.$router.push('/');
      });
    },
    save() {
      NotesDAO.getInstance().save(this.note).then((result) => {
        console.log(result);
        // this.note = result;

        this.$q.notify(' Save note successfully');
        this.$router.push('/');
      });
    },
  },
};
</script>
