<template>
	<Layout>
		<h1>{{$page.movie.title}}</h1>
		{{$page.movie}}
	</Layout>
</template>

<script>
export default {
  metaInfo() {
	  return {
		title: this.$page.movie.title
	  };
  }
}
</script>

<page-query>
query ($path: String!) {
  movie (path: $path) {
    id
    title
    coverImage
    releaseYear
    own
  }
}
</page-query>
