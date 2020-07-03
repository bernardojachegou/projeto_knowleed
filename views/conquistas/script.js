const read = document.querySelector("#reading")
document.querySelector(".read")
.addEventListener("click", function(){
    if(read.classList.contains("hideread")){
        read.classList.remove("hideread")
    }else{
        read.classList.add("hideread")
    }
})

const write = document.querySelector("#writing")
document.querySelector(".write")
.addEventListener("click", function(){
    if(write.classList.contains("hidewriting")){
        write.classList.remove("hidewriting")
    }else{
        write.classList.add("hidewriting")
    }
})

const quizz = document.querySelector("#quizz")
document.querySelector(".quiz")
.addEventListener("click", function(){
    if(quizz.classList.contains("hidequizz")){
        quizz.classList.remove("hidequizz")
    }else{
        quizz.classList.add("hidequizz")
    }
})