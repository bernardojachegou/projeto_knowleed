const writeModal = document.querySelector("#modalwrite")
document.querySelector(".content a")
.addEventListener("click", function(){
    writeModal.classList.remove("hide")
})
document.querySelector("#modalwrite i")
.addEventListener("click", function(){
    writeModal.classList.add("hide")
})
const myReviews = document.querySelector("#myreviews")
document.querySelector(".mywrites")
.addEventListener("click", function(){
  if(myReviews.classList.contains("hidewrite")){
      myReviews.classList.remove("hidewrite")
  }else{
      myReviews.classList.add("hidewrite")
  }
})
const otherReviews = document.querySelector("#otherreviews")
document.querySelector(".otherwrites")
.addEventListener("click", function(){
    if(otherReviews.classList.contains("hidewrite")){
        otherReviews.classList.remove("hidewrite")
    }else{
        otherReviews.classList.add("hidewrite")
    }
})