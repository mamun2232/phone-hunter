// data Load to Search book
const dataLoad = () =>{
          const searchFlied = document.getElementById('search-box')
          const searchText = searchFlied.value
           searchFlied.value = ''
           if(searchText == ''){
                     document.getElementById('arrow-massage').innerText = `Please Valid Type`

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
          console.log(phones);
         const displayPhone = document.getElementById('phones')
         displayPhone.textContent = ''

         if(phones.length == 0){
          document.getElementById('arrow-massage').innerText = `No Phone Found`


         }
         else{
          phones.forEach(phone =>{
                    
                    const div = document.createElement('div')
                    div.innerHTML = `
                    <div class="col ">
                              <div class="card shadow rounded">
                              <img  class="images img-fluid" src="${phone.image}" class="card-img-top" alt="...">
                              <div class="card-body mt-2">
                             
                              <div class="text-center">
                              <h5 class="card-title">${phone.phone_name}</h5>
                              <p class="card-text"> ${phone.brand}</p>
                              <button onclick="phoneDetals('${phone.slug}')" class="btn btn-primary px-5 ">Detals</button>
                               </div>
                              </div>
                             
                    `
                    displayPhone.appendChild(div)
          })

         }

          
}


const phoneDetals = (detals) =>{
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
                  <img src="${phoneInfo.image}" class="img-fluid   rounded-start" alt="...">
                        
                </div>
                    
                    
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">${phoneInfo.name}</h5>
                      
                      <h6 class="text-muted">Relase Date: ${phoneInfo?.releaseDate}</h6>
                      <p>Brand: ${phoneInfo.brand}</p>
                      <p>Main Fetcure <p/>
                      
                      <p>DisplaySize: ${phoneInfo.mainFeatures.displaySize}</p>
                      <p>Memory: ${phoneInfo.mainFeatures.memory}</p>
                      <p>ChipSet: ${phoneInfo.mainFeatures.chipSet}</p>
                      <p>Sencor: ${phoneInfo.mainFeatures.sensors}</p>
                      <p>Other Future</P>
                      <p>WLAN: ${phoneInfo?.others?.WLAN}</p>
                      <p>Bluetooth: ${phoneInfo?.others?.Bluetooth}</p>
                      <p>GPS: ${phoneInfo?.others?.GPS}</p>
                      <p>NFCr: ${phoneInfo?.others?.NFC}</p>
                      <p>Radio: ${phoneInfo?.others?.Radio}</p>
                      <p>USB: ${phoneInfo?.others?.USB}</p>
                  
                     
                    

</div>
          
            </div>
                      

          `
          detals.appendChild(div)
          

}


