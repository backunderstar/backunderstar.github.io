
    var posts=["post/1panel/","post/mc_server/","post/ubuntu_root/","post/lsky-pro/","post/yunzai_docker/","post/yunzai_win/","post/semiconductor_physics_0/","post/hexo_create/","post/zhanwei/","post/genshin_sayings/","post/solid_physics_1/","post/solid_physics_2/","post/common_use/","post/electric_system_0/","post/zhishi/"];
    function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};

    var friend_link_list=[{"name":"安知鱼","hundredSuffix":"!w120","link":"https://anzhiy.cn/","avatar":"https://img01.anzhiy.cn/useruploads/90/2023/04/23/6444e85234e51.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/anzhiy.cn.jpg"},{"name":"X2","link":"https://blog.lrcshare.com","hundredSuffix":"!w120","avatar":"https://s2.loli.net/2023/04/22/P2dY84RLjFeCyIt.jpg","descr":"我梦寐以求，是真爱和自由。","siteshot":"https://image.muerg.cn/i/2023/05/07/6457494f94375.webp"},{"name":"朝而往","hundredSuffix":"!w120","link":"https://muerg.cn/","avatar":"https://image.muerg.cn/i/2023/05/01/644f6cebafd3d.jpg","descr":"四时之景不同，而乐亦无穷也。","siteshot":"https://image.muerg.cn/i/2023/05/01/644f6c9675c86.jpg"},{"name":"湘铭`Blog","hundredSuffix":"!w120","link":"https://blog.xiangming.site/","avatar":"https://photo.xiangming.site/img/icologo.png","descr":"听闻余生，相濡以沫💕","siteshot":"https://photo.xiangming.site/img/fengmian.png"},{"name":"rencai","hundredSuffix":"!w120","link":"https://btrencai.top","avatar":"https://img01.anzhiy.cn/useruploads/122/2023/04/09/64323d86807fb.jpg","descr":"今天你学了么","siteshot":"https://img01.anzhiy.cn/useruploads/122/2023/04/25/644754d072ba1.png"},{"name":"小植の小破站","hundredSuffix":"!w120","link":"https://xiaoztx.top","avatar":"https://cdn.staticaly.com/gh/huangblog/picx-images-hosting@master/20230423/achen.6r78lm2agkg0.webp","descr":"生生不息，好运不止","siteshot":"https://cdn.staticaly.com/gh/huangblog/tuchuang@main/img/achen.57qvq1wktbo0.webp"},{"name":"御网尚书的日记本","hundredSuffix":"!w120","link":"https://hack-gov.com.cn","avatar":"https://websitecssjs.oss-cn-beijing.aliyuncs.com/links/favicon.ico","siteshot":"https://websitecssjs.oss-cn-beijing.aliyuncs.com/links/siteshot.jpg","descr":"愿以赤子之心，共建网络空间安全"},{"name":"辰风Blog","hundredSuffix":"!w120","link":"https://chenfengblog.eu.org/","avatar":"https://img01.anzhiy.cn/useruploads/108/2023/03/12/640dac11413b0.png","descr":"超电磁炮永世长存","siteshot":"https://img01.anzhiy.cn/useruploads/108/2023/04/01/642844c1ea151.png"},{"name":"王貔貅","hundredSuffix":"!w120","link":"https://blog.wpixiu.cn/","avatar":"https://picture.wpixiu.cn/aoyPjW.jpg","descr":"日就月将,学有缉熙于光明","siteshot":"https://pic2.imgdb.cn/item/64575baa0d2dde5777309417.jpg"},{"name":"dreaming12","hundredSuffix":"!w120","link":"https://dreaming12.github.io/","avatar":"https://image.muerg.cn/i/2023/05/03/645136fe5b1e8.webp","descr":"Daydreaming"},{"name":"小潘","hundredSuffix":"!w120","link":"https://pansida.cn/","avatar":"https://img.pansida.cn/i/2023/04/24/644623af331d0.jpg","descr":"拥抱阳光，活力满满"},{"name":"虎了吧唧","hundredSuffix":"!w120","link":"https://hulebaji.me","avatar":"https://cravatar.cn/avatar/c126bb295caa6f29cbbd32083708cda4?d=identicon","descr":"研墨成浆，提笔思量"}];
    var refreshNum = 1
    var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
    function addFriendLinksInFooter() {
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    }
    