var flag = 0;
var like = 0;

// code for incrementing like count
function incrementCounter(){
  like++;
  document.getElementsByClassName("likeText")[0].innerHTML = "Liked!";
  if(like == 1)
  {
    document.getElementById("afterLike").innerHTML = "1 person likes this!";
  }
  else if(like > 1)
  {
    document.getElementById("afterLike").innerHTML = like + " people liked this!";
  }
}

// code to toggle edit/save button to edit the blog content and save it
function toggleEditSave(){
  if(flag==0)
  {
    var a=document.getElementById("blogBody").innerHTML;
    var x=document.getElementById("temp").innerHTML;
    document.getElementById("text").innerHTML='Save ';
    document.getElementById("edit1").style.display = "none";
    document.getElementById("text2").innerHTML=x;
    document.getElementById("textarea").value=a;
    document.getElementById("blogBody").style.display="none";
    document.getElementById("blogBody").style.textAlign="left";
    document.getElementById("textarea").style.display="block";
    document.getElementById("textarea").style.width="95%";
    document.getElementById("textarea").style.height="500px";

    var title=document.getElementById("blogTitleNew").innerHTML;
		document.getElementById("titleArea").value=title;
		document.getElementById("blogTitleNew").style.display="none";
    document.getElementById("titleArea").style.display="block";
    flag=1;
  }
  else{
    var c = document.getElementById("textarea").value;
    document.getElementById("blogBody").innerHTML=c;
    document.getElementById("blogBody").style.display="block";
    document.getElementById("textarea").style.display="none";
    var d=document.getElementById("titleArea").value;
    document.getElementById("blogTitleNew").innerHTML=d;
    document.getElementById("blogTitleNew").style.display="block";
    document.getElementById("titleArea").style.display="none";
    var d=document.getElementById("temp2").innerHTML;
    document.getElementById("text").innerHTML='Edit';
    document.getElementById("text2").innerHTML=d;
    flag=0;
  }
}

// code for adding comments
function addComment(){
  
  var x = document.getElementById("txtCommentCommentPost").addEventListener("onchange", function(){
    document.getElementById("txtCommentCommentPost").innerHTML;
  });

  var x = document.getElementById("txtCommentCommentPost").value;
  
  var pElement = '<p style="background-color:white; height: 60px; padding-left: 10px; padding-top: 15px; margin: 10px 15px; overflow: hidden; border:none;">'+ x + '</p>';
  var getDiv = document.getElementById('listAllComments');
  getDiv.innerHTML = pElement + getDiv.innerHTML;
}