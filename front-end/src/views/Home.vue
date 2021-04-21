<template>
  <div class="home">
    <posts-show :posts="posts" />
  <p v-if="error">{{error}}</p>
  </div>
</template>

<script>
import axios from 'axios';
import PostsShow from '../components/PostsShow.vue'
// @ is an alias to /src


export default {
  name: 'Home',
  components: {
    PostsShow
  },
  data() {
    return {
      posts: [],
      error: '',
    }
  },
  created() {
    this.getPosts();
  },
  methods: {
    async getPosts() {
      try {
        let response = await axios.get("/api/posts/all");
        this.posts = response.data;
      } catch (error) {
        this.error = error.response.data.message;
      }
    },
  }
}
</script>
