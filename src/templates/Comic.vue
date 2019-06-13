<template>
	<Layout>
		<h1>{{$page.comic.title}}</h1>
		{{$page.comic}}
	</Layout>
</template>

<script>
export default {
  metaInfo() {
	  return {
		title: this.$page.comic.title
	  };
  }
}
</script>

<page-query>
query ($path: String!) {
  comic (path: $path) {
    id
    title
    releaseYear
    publisher
    issues {
      covers {
        coverImage
        own
      }
      issue
    }
  }
}
</page-query>
