namespace Blog {
  export interface IPost {
    title: string;
    body: string;
    slug: string;
    seoKeywords: string;
  }

  export class Post {
    title: string;
    body: string;
    slug: string;
    seoKeywords: string;

    constructor(post: IPost) {
      this.title = post.title;
      this.body = post.body;
      this.slug = post.slug;
      this.seoKeywords = post.seoKeywords;
    }

    printPost() {
      console.log(this.title);
      console.log(this.body);
      console.log(this.slug);
      console.log(this.seoKeywords);
    }
  }
}

namespace Content {
  export interface IPost {
    title: string;
    body: string;
    slug: string;
    seoKeywords: string;
  }

  export class Post {
    title: string;
    body: string;
    slug: string;
    seoKeywords: string;

    constructor(post: IPost) {
      this.title = post.title;
      this.body = post.body;
      this.slug = post.slug;
      this.seoKeywords = post.seoKeywords;
    }

    printPost() {
      console.log(this.title);
      console.log(this.body);
      console.log(this.slug);
      console.log(this.seoKeywords);
    }
  }
}

var blogPost = new Blog.Post({
  title: "My Post",
  body: "Content",
  slug: "Slug content",
  seoKeywords: "Keywords",
});

blogPost.printPost();

var contentPost = new Content.Post({
  title: "My Other Post",
  body: "Other Content",
  slug: "Other slug content",
  seoKeywords: "More Keywords",
});

contentPost.printPost();