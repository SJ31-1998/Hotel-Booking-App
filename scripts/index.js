
let myFunction = () => {
        let viewMoreButtonElement = document.getElementById("view-more-button");
        if (viewMoreButtonElement.innerText == "View More") {
            document.getElementById("metro").style.display = "flex";
            document.getElementById("metro").style.display = "space-evenly";
            viewMoreButtonElement.innerText = "View Less";
        }
        else {
            document.getElementById("metro").style.display = "none";
            viewMoreButtonElement.innerText = "View More";
        }
    }



var img=document.getElementById("img2").value;
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://tripadvisor1.p.rapidapi.com/answers/list?limit=10&question_id=5283833");
xhr.setRequestHeader("x-rapidapi-host", "tripadvisor1.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "277ceb128emsh43581ac52719c61p1f3239jsn59de60aaf25c");

xhr.send(img);


xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
        console.log(this.responseText);
    
	}
});







