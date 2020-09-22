import request from './request'

//发现-轮播图
export const getBanners = () => request({
  url: '/banner?type=0'
})
//发现-推荐歌单
export const getPopularPlaylist = () => request({
  url: '/personalized'
})
//发现-新歌
export const getNewSong = () => request({
  url: '/personalized/newsong'
})
//搜索框placeholder
export const getPlaceholder = () => request({
  url: '/search/default'
})
//搜索框——热搜榜
export const getHotDetail = () => request({
  url: '/search/hot/detail'
})       
//歌单——推荐
export const getPlaylist = () => request({
  url: '/top/playlist'
})   
//排行榜
export const getToplist = () => request({
  url: '/toplist/detail'
}) 

//歌单——精品      /top/playlist/highquality
//歌单——所有歌单    /playlist/catlist
//歌单——所有歌单（火）    /playlist/hot
//上拉更多       /top/playlist?limit=100
//推荐歌单      /playlist/detail?id=${id}

//发现——新碟——本周新碟    /top/album

//排行榜——mv排行榜    /top/mv
//排行榜——歌手榜     /toplist/artist
//  热门歌手    /top/artists

//电台——轮播图      /dj/banner
//电台——电台分类       /dj/catelist    /dj/category/excludehot
//电台——电台推荐     /dj/recommend
//电台——电台分类推荐      /dj/category/recommend
//电台——付费精品      /dj/paygift
//电台——电台排行——主播榜——24小时榜     /dj/toplist/hours
//电台——电台排行——主播榜——新人榜     /dj/toplist/newcomer
//电台——电台排行——主播榜——最热主播      /dj/toplist/popular
//电台——电台排行——电台榜——付费精品榜    /dj/toplist/pay
// 获取最热节目         /dj/program/toplist
//           /dj/hot
//      /dj/today/perfered
// 获取电台榜         /dj/toplist
// 获取节目榜24小时榜    /dj/program/toplist/hours

//视频——mv——MV精选  /personalized/mv
//视频——mv——更多  /mv/first
//视频——mv——分类——全部        /mv/all
//       /mv/exclusive/rcmd
// 获取视频标签导航     /video/group/list


//数字专辑——最新上架  /album/list
//数字专辑——语种风格馆——华语  /album/list/style
//数字专辑——畅销榜——日榜      /album/songsaleboard
//最新专辑   /album/newest
//           /album/new


//获取音乐url   /song/url?id=${id}
//获取音乐歌词   /lyric?id=${id}
//获取音乐详情    /song/detail?ids=${ids}

//节目推荐   /program/recommend

//   /personalized/djprogram
//   /personalized/privatecontent
//  /personalized/privatecontent/list
//           /artist/list

//        /homepage/block/page

//                 /top/song

//                    /search/hot

// 发现页私人FM     /personal_fm

//搜索歌曲    /search?keywords=${word}
// 排行榜
//export const getTopList = () => $http.get('/toplist')
// 排行榜 -> 飙升榜idx = 3
//export const getTopListIdx = idx => $http.get(`/top/list?idx=${idx}`)
