var userId = 'ce32af7f2a97'
fetchUserLastestInfo(userId)

function fetchUserLastestInfo(userId) {
  $.ajax({ url: 'http://www.jianshu.com/users/${userId}/timeline' }).done(function(data) {
    var infos = $(data).find('.note-list li')
    
  })
}
$('.note-list li:last-child').attr('id').split('-')[1] - 1
    
function (argument) {
  // body...
}


http://www.jianshu.com/users/ce32af7f2a97/timeline?max_id=92013482&page=7

http://www.jianshu.com/users/EhUmA3/followers?page=6

书的 id
22decc5647ac

f489ec955505

http://www.jianshu.com/c/f489ec955505


http://www.jianshu.com/notes/8729776/submit
{"collection_id":1084}

http://www.jianshu.com/notes/8469529/submit
{"collection_id":1084}

function submitArticle (articleIndex=0, collectionId) {
  fetchArticleList().done(articles => {
    var sumbitArticle = articles[articleIndex]
    return submitArticle(sumbitArticle.id, collectionId) 
  }).done(data => {
    alert(`${article.name} 投稿成功!`)
  })
}
// 给专栏投稿
submitArticle(8331679, 1084)
function submitArticle (articleId, collectionId) {
  return $.ajax({
    url: `http://www.jianshu.com/notes/${articleId}/submit`,
    type: 'post',
    data: JSON.stringify({
      collection_id: collectionId
    }),
    contentType: 'application/json'
  })
}

// 获取我的文章列表
function fetchArticleList () {

}



获取要投稿的文章的id

$.ajax({
  url: 'http://www.jianshu.com/collections/1084/contribute_notes?page=1'
}).done(articles => {
  var index = 0
  var article = articles[index]
  console.log(`${article.id} ${article.title}` )
})