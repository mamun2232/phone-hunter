
// data Load to Search book
const dataLoad = () =>{
          const searchFlied = document.getElementById('search-box')
          const searchText = searchFlied.value
          document.getElementById('phone-detals').style.display = 'none'
          
          
          
           searchFlied.value = ''
           
           if(searchText == ''){
                     document.getElementById('arrow-massage').innerText = `Please Search A Valid Phone Name..`

           }
          // data load 
        
          else{
            
                    document.getElementById('arrow-massage').innerText = ``
                    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
          fetch(url)
          .then(res => res.json())
          .then(data => showDisplayPhone(data.data))
          }  
          
          

}


// show dainamic data 
const showDisplayPhone = (phones) =>{
          
          const allPhones = phones.slice(0, 20)
          console.log(allPhones);
         const displayPhone = document.getElementById('phones')
         displayPhone.textContent = ''

         if(allPhones.length == 0){
          document.getElementById('arrow-massage').innerText = `No Phone Found.Try Again..`


         }
         else{
          allPhones.forEach(phone =>{
                    
                    const div = document.createElement('div')
                    div.innerHTML = `
                    <div class="col ">
                              <div class="card shadow rounded">
                              <img  class="images img-fluid" src="${phone.image}" class="card-img-top" alt="...">
                              <div class="card-body mt-2">
                             
                              <div class="text-center">
                              <h5 class="card-title">${phone.phone_name}</h5>
                              <p class="card-text"> ${phone.brand}</p>
                              <button onclick="phoneDetals('${phone.slug}')" class="btn btn-primary px-5 ">Details</button>
                               </div>
                              </div>
                             
                    `
                    displayPhone.appendChild(div)
                   
          })
        
        
         }
         

          
}




const phoneDetals = (detals) =>{
  document.getElementById('phone-detals').style.display = 'block'
          console.log(detals);
          const url = ` https://openapi.programming-hero.com/api/phone/${detals}`
          fetch(url)
          .then(res => res.json())
          .then(data => ShowDetals(data.data))
}

const ShowDetals = (phoneInfo) =>{
          
          console.log(phoneInfo);
          const detals = document.getElementById('phone-detals')
          detals.textContent = ''
          console.log(phoneInfo.releaseDate);
          const div = document.createElement('div')
          
          div.innerHTML = `
          <div  class="card mb-3" >
          <div class="row g-0">
                  <div class="col-md-4 d-flex justify-content-center align-items-center">
                  <div class="d-block ">
                  <img class="detals-img" src="${phoneInfo.image}" class="img-fluid   rounded-start" alt="...">
                        
                </div>
                    
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title fw-bold">${phoneInfo.name}</h5>
                      
                      <h6 class="text-muted">${phoneInfo.releaseDate ? phoneInfo.releaseDate: 'Not found release date'}</h6>
                      <p><span class="fw-bold me-2">Brand: </span> ${phoneInfo.brand}</p>
                      <p><span class="fw-bold">Main Features</span>  <p/>
                      
                      <p><span class="fw-bold me-3">DisplaySize: </span> ${phoneInfo.mainFeatures.displaySize}</p>
                      <p> <span class="fw-bold me-3">Memory: </span> ${phoneInfo.mainFeatures.memory}</p>
                      <p> <span class="fw-bold me-3">ChipSet: </span> ${phoneInfo.mainFeatures.chipSet}</p>
                      <p> <span class="fw-bold me-3">Sencor: </span> ${phoneInfo.mainFeatures.sensors}</p>

                      
                      <p><span class="fw-bold">Other Features</span>  </P>
                      <p><span class="fw-bold me-3">WLAN: </span> ${phoneInfo?.others?.WLAN ? phoneInfo.others.WLAN : 'dual-band, Wi-Fi Direct, hotspot'}</p>
                      <p><span class="fw-bold me-3">Bluetooth:: </span> ${phoneInfo?.others?.Bluetooth ? phoneInfo.others.Bluetooth : 'Yes'}</p>
                      <p><span class="fw-bold me-3">GPS: </span> ${phoneInfo?.others?.GPS ? phoneInfo.others.GPS : 'Yes, with A-GPS'}</p>
                      <p><span class="fw-bold me-3">NFC: </span> ${phoneInfo?.others?.NFC ? phoneInfo.others.NFC : 'No'}</p>
                      <p><span class="fw-bold me-3">Radio: </span> ${phoneInfo?.others?.Radio ? phoneInfo.others.Radio : 'Yes'}</p>
                      <p><span class="fw-bold me-3">USB: </span> ${phoneInfo?.others?.USB ? phoneInfo.others.USB : 'Yes, USB Type-C 2.0'}</p>
                  
                     
                
</div>
          
            </div>
                      

          `
          detals.appendChild(div)
          

}


