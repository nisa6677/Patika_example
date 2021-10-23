const posts = [
    { name: "Post 1", author: "Yazar 1" },
    { name: "Post 2", author: "Yazar 2" },
    { name: "Post 3", author: "Yazar 3" },
  ];
  
  const getAllPost = () => {
    posts.map((posts) => {
      console.log(posts.name);
    });
  };
  
  const addPost = (newPost) => {
    const promise1 = new Promise((resolve, reject) => {
      posts.push(newPost);
      resolve(posts);
      reject("Bir Hata Oluştu");
    });
    return promise1;
  };
  async function showPosts() {
    try {
      await addPost({ name: "Post 4", author: "Yazar 4" });
      getAllPost();
    } catch (error) {
      console.log(error);
    }
  }
  
  
  
  showPosts();