console.log("Mohd Askery Malik");


let tableBody=document.getElementById('tbody');
let pro=document.getElementById('pro');

xhr=new XMLHttpRequest();
xhr.open(
  "GET",
  "http://newsapi.org/v2/top-headlines?country=in&apiKey=779f106e10664a018d3f5a8cb3fbb74c",
  true
);
xhr.onprogress=function(){
  pro.innerText="Loading.....";
}
xhr.onload=function(){
     pro.innerText="";
    if (this.status === 200) {
      let data=this.responseText
      data=JSON.parse(data);
      let arti = data.articles;
      let str="";
      arti.forEach(element => {
        // console.log(element);
        str += `<tr>
                <td><img src="${element["urlToImage"]}" width=200 height=200></td>
                 <td><b>Autohr:${element["author"]}</b> <br> Title : ${element["title"]} <br><hr> ${element["description"]}<br><br> Published at: ${element["publishedAt"]} <br> <a href="${element["url"]}" target="_blank">Readmore</a></td>
                 </tr><br><br><hr>`;
      });
      tableBody.innerHTML=str;

      // console.log(arti);
    } else {
      console.log("Some thing error occurd");
    }
}
xhr.send();
