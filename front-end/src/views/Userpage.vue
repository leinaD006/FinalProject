<template>
<div class="userpage">
  <UserPosts v-if="user" />
  <Login v-else />
</div>
</template>

<script>
import UserPosts from '@/components/UserPosts.vue';
import Login from '@/components/Login.vue';
import axios from 'axios';
export default {
  name: 'userpage',
  components: {
    UserPosts,
    Login,
  },
  async created() {
    try {
      let response = await axios.get('/api/user');
      this.$root.$data.user = response.data.user;
    } catch (error) {
      this.$root.$data.user = null;
    }
  },
  computed: {
    user() {
      return this.$root.$data.user;
    }
  }
}
</script>

<style scoped>
.userpage {
  padding-top: 10px;
}
</style>