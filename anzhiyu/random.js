var posts=["post/common_shell/","post/genshin_sayings/","post/hexo_create/","post/mc_server/","post/semiconductor_physics_1/","post/ubuntu_root/","post/yunzai_docker/","post/yunzai_win/","post/zhanwei/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};