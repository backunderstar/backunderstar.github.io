var posts=["post/1panel/","post/mc_server/","post/ubuntu_root/","post/lsky-pro/","post/yunzai_docker/","post/yunzai_win/","post/semiconductor_physics_0/","post/hexo_create/","post/zhanwei/","post/genshin_sayings/","post/solid_physics_1/","post/solid_physics_2/","post/common_use/","post/electric_system_0/","post/electric_system_2/","post/zhishi/"];function toRandomPost(){pjax.loadUrl("/"+posts[Math.floor(Math.random()*posts.length)])}