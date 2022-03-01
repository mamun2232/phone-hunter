// data Load to Search book
const dataLoad = () =>{
          const searchFlied = document.getElementById('search-box')
          const searchText = searchFlied.value
           searchFlied.value = ''
           if(searchText == ''){
                     document.getElementById('arrow-massage').innerText = `Sorry`

           }
          // data load 
          else{
                    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
          fetch(url)
          .then(res => res.json())
          .then(data => showDisplayPhone(data.data))
          }   
}

// show dainamic data 
const showDisplayPhone = (phones) =>{
         const displayPhone = document.getElementById('phones')
         displayPhone.textContent = ''

          phones.forEach(phone =>{
                    
                    const div = document.createElement('div')
                    div.innerHTML = `
                    <div class="col ">
                              <div class="card">
                              <img  class="images img-fluid" src="${phone.image}" class="card-img-top" alt="...">
                              <div class="card-body mt-2">
                             
                              <div class="text-center">
                              <h5 class="card-title">${phone.phone_name}</h5>
                              <p class="card-text">Brand: ${phone.brand}</p>
                              <button onclick="phoneDetals('${phone.slug}')" class="btn btn-primary px-5 ">Detals</button>
                               </div>
                              </div>
                             
                    `
                    displayPhone.appendChild(div)
          })
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
          const div = document.createElement('div')
          div.innerHTML = `
          <div class="row g-0">
                                          <div class="col-md-4">
                                          <div class="d-block text-center">
                                          <img src="${phoneInfo.image}" class="img-fluid  rounded-start" alt="...">
                                                
                                        </div>
                                            
                                            
                                          </div>
                                          <div class="col-md-8">
                                            <div class="card-body">
                                              <h5 class="card-title">${phoneInfo.name}</h5>
                                              <p>Brand: ${phoneInfo.brand}</p>
                                              <p>DisplaySize: ${phoneInfo.mainFeatures.displaySize}</p>
                                              <p>Memory: ${phoneInfo.mainFeatures.memory}</p>
                                              <p>Sencor: ${phoneInfo.mainFeatures.sensors}</p>
                                             
                                            

                      </div>
          
          `
          detals.appendChild(div)

}