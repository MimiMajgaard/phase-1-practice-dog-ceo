// Wait for the page to load
window.addEventListener('load', function(event) {
    // API Call 1
    fetch("https://dog.ceo/api/breeds/image/random/4")
         .then(res=>res.json())
         .then(result=>{
             const images = result['message']
             for(let i = 0; i < images.length; i++){
                 // Element where images will be placed under
                 const imageContainer = document.querySelector('#dog-image-container')
                // All the images that come back from the server
                 const image = images[i]
                 // Insert this image into the DOM
                // <img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600"> 
                const imageElement = document.createElement('img')
                // Set the source of the imageElement to the const image
                imageElement.src = image
                // insert imageElement into the DOM (element with id dog-image-container)
                imageContainer.appendChild(imageElement)
             }
         })
    
    // API Call 2
    fetch("https://dog.ceo/api/breeds/list/all")
        .then(res=>res.json())
        .then(data=>{
             const breedsContainer = document.querySelector('#dog-breeds')
             // Add the list of URL text into the UL element using LI elements
             const breeds = data['message']
             // Loop throught the Object (not array) and 
             for (const key in breeds) {
                // Add each url (key) to the UL mentioned above
                // Create li element
                const li = document.createElement('li')
        
                // Set innerHTML of li element
                li.innerHTML = key 
                
                // appendChild to the parent (UL) element
                breedsContainer.appendChild(li)

                // add a click event listener that will change the font color
                li.addEventListener("click", (event) => {
                    //console.log(event)
                    //event.target.classList.add("color")
                    li.style.color = "orangered"
                });
                document.getElementById('breed-dropdown').addEventListener('change', function(){
                    // Reset breed name list to original list 
                    if (key.charAt(0) != this.value) {
                        li.style.display = 'none';
                    }
                });
             }   
        })
});

