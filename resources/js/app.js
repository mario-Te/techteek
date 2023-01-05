
 
class GIF {
    static get toolbox() {
      return {
        title: 'GIF',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="136" y1="72" x2="136" y2="184" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="228 72 180 72 180 184" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="216" y1="128" x2="180" y2="128" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M72,132H96v20a32,32,0,0,1-64,0V104a32,32,0,0,1,63-8" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>'
      };
    }
    render(){
      if (this.existing) {
        return null;
      }
        const search_box= document.createElement('input');
        search_box.setAttribute('id','input-gif');
        search_box.setAttribute('placeholder','Searh GIF')
        const button1= document.createElement('button');
        button1.textContent = 'Search';
        button1.setAttribute('type','button');
        button1.setAttribute('id','search-gif-button');
        button1.setAttribute('class','mx-2 btn btn-primary');
        button1.addEventListener('click',()=>{
          clearOutput();
          getData(search_box.value);
        });
        const div2=document.createElement('div');
        div2.setAttribute('class','output ');
        getData("random");
        const div1=document.createElement('div');
        div1.appendChild(search_box);
        div1.appendChild(button1);
        div1.appendChild(div2);
        div1.setAttribute('class','my-3 ');

        return div1;
    }
  
    save(){
       var text="";
       $('img.Selected-img').each(function () {
        text+=this.src;
    });
   
      return {
        text:text
      }
    }
  }

const editor = new EditorJS({
  holderId: "editorJS",
  tools: {
    image: GIF,
    
    embed: {
      class: Embed,
      inlineToolbar: false,
      config: {
        services: {
          youtube: true,
          coub: true
        }
      }
    }
  }
});

let btnReset = document.querySelector("#btnReset");
btnReset.addEventListener("click", () => {
  editor.clear();
});
function showData(data) {
  data.forEach((element) => {
    let src = element.images.fixed_height.url;
    var output = document.querySelector(".output");
    output.innerHTML += "<img class='img-thumbnail w-25 object-fit-cover cursor-pointer' src=" + src + " >";
  });
  output.innerHTML += "<br><button type='button' id='Insertimg'> Insert</button";
}
function getData(input) {
  var API_KEY = "g3TEgnU2pGODGJrcvHcn36HwOhK3E8l9";
  var url =
    "https://api.giphy.com/v1/gifs/search?api_key=" +
    API_KEY +
    "&q=" +
    input +
    "&limit=25&offset=0&rating=g&lang=en"; 
  fetch(url)
    .then((response) => response.json())
    .then((data) => showData(data.data))
    .catch((e) => {
      console.log(e);
    });
}

$('body').on('click','.output img',function(){
  if(!$(this).hasClass( 'Selected-img'))
   { 
     $(this).addClass('Selected-img');
     $(this).css("border", "2px solid red");  
    }
  else {
    $(this).removeClass('Selected-img');
    $(this).css("border", "none");  
  }
  });
 
  $('body').on('click','#btnSaves',function(e){
    
    editor.save().then(savedData => {
      const myObj =  JSON.stringify(savedData);
      const json=JSON.parse(myObj);
      var content="";
      for (let i = 0; i < json.blocks.length; i++) {
        content+=json.blocks[i].data.text +" ";
      }
      console.log(content);
     document.getElementById('description').value=content;
     });
    });
function clearOutput() {
  var output = document.querySelector(".output");
  output.innerHTML = "";
}

   