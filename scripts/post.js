function incrementCounter(){
  var cntr = document.getElementById('counterLikedBy');
  var val = parseInt(cntr.innerText);
  cntr.innerText = val+1;
  document.getElementById('defaultText').style.display = 'none';
}

function toggleEditSave(){
  var toggleSave = '<button class="postEdit btn btn-danger">Save '+
  '<i style="font-size: 14px;font-weight: bolder;" '+
  'class="fa fa-save" aria-hidden="true"></i>'+
  '</button>';
  var toggleEdit = '<button class="postEdit btn btn-danger">Edit '+
  '<i style="font-size: 14px;font-weight: bolder;" '+
  'class="fa fa-pencil-square-o" aria-hidden="true"></i>'+
  '</button>';

  var edtSaveBtn = document.getElementById('editPost');
  var toDo = (edtSaveBtn.innerText).toString().trim();
  console.log(toDo);
  console.log(toDo.localeCompare('Edit'));
  if(toDo.localeCompare('Edit')===0){
    console.log("Currently Edit");
    var bSave = document.getElementById('editPost');
    bSave.innerHTML = toggleSave;
    enableEditableText();

  }
  else{
    console.log("Currently Save");
    var bEdit = document.getElementById('editPost');
    bEdit.innerHTML = toggleEdit;
    updateEditedBlog();
  }

}

function enableEditableText(){
  var getBlogContentEle = document.getElementById('blogBody');
  var getBlogContent = getBlogContentEle.innerText;

  //Div element
  var getDiv = document.getElementById('blogBodyId');
  //Create a input element
  var inputElement = '<textarea class="txtBlog" id="txtEditedBlog" style="width:1100px; height:600px">'+
  getBlogContent+
  '</textarea>'
  //Update the Div element
  getDiv.innerHTML = inputElement;
}
function updateEditedBlog(){
  var editedBlog = document.getElementById('txtEditedBlog');

  var textEdited = (editedBlog.innerHTML).toString();
  
  var pElement = '<p id="blogBody">'+
  textEdited+
  '</p>';
  var getDiv = document.getElementById('blogBodyId');
  getDiv.innerHTML=pElement;

}
function addComment(){
  console.log("Inside add comment");
  var x = document.getElementById("txtCommentCommentPost").addEventListener("onchange", function(){
    document.getElementById("txtCommentCommentPost").innerHTML;
  });

  var x = document.getElementById("txtCommentCommentPost").value;
  
  console.log(x);
  var pElement = '<textarea style="background-color:white; width: 600px; height: 60px; padding-left: 10px; padding-top: 15px; margin: 20px 15px; overflow: hidden; border:none;">'+ x + '</textarea>';
  var getDiv = document.getElementById('listAllComments');
  getDiv.innerHTML = pElement + getDiv.innerHTML;
}