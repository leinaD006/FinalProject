<template>
<div>
  <section class="posts container">
    <div class="post" v-for="post in posts" v-bind:key="post._id">
      <div class="postInfo">
        <p class ="postBook">{{post.book}}</p>
        <p class="postTitle">{{post.title}}</p>
        <p class="postReview">{{post.review}}</p>
        <p class="postName">{{post.user.firstName}} {{post.user.lastName}}</p>
      </div>
      <p class="postDate">{{formatDate(post.created)}}</p>
      <hr />
    </div>
  </section>
</div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'PostsShow',
  props: {
    posts: Array
  },
  methods: {
    formatDate(date) {
      if (moment(date).diff(Date.now(), 'days') < 15)
        return moment(date).fromNow();
      else
        return moment(date).format('d MMMM YYYY');
    }
  }
}
</script>

<style scoped>
.posts {

}
</style>