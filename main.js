// select cat image
const cat = document.querySelector("img");
// counter for counting clicks
let counter =0;

// select the span with id click
const click = document.querySelector("#click");    

  // set counter into click
  click.textContent = counter;  
  
  // add click on cat image
  cat.addEventListener("click", ()=>{
        counter++;
click.textContent = counter;
  })

    










