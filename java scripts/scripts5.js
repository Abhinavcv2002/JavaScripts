//-- api data fetch in js --//

    // async function fetData() {
    //     try{
    //         const response = await fetch("https://dummyjson.com/products")
    //         // console.log('response',response);
    //         const products = await response.json()
    //         console.log('products',products);
            
            
    //     }catch(error){

    //     }
    // }
    // fetData()

//---

    //  async function fetData() {
    //      try{
    //         const response = await fetch("https://dummyjson.com/products")
    //         const products = await response.json()
    //         const data = products.products
    //         const div = document.querySelector(".div")

    //         data.forEach(item => {
    //             console.log(item.title);
    //             const h1 = document.createElement("h1")
    //             h1.innerHTML = item.title
    //             div.appendChild(h1)
    //         });
    //      }catch(error){
    // } 
    // }


    async function fetData() {
        try {
            const response = await fetch("https://dummyjson.com/products");
            const products = await response.json();
            const data = products.products;
            const div = document.querySelector(".div");
    
            data.forEach(item => {
                console.log(item);
    
                div.innerHTML += `
                    <div class='col-lg-4'>
                        <div class='card' style='width:100%'>
                            <p>Image at the top (card-img-top):</p>
                            <div class="card" style="width:100%">
                                <img class="card-img-top" src="${item.thumbnail}" alt="Card image" style="width:100%">
                                <div class="card-body">
                                    <h4 class="card-title">${item.name}</h4>
                                    <p class="card-text">${item.description || 'No description available.'}</p>
                                    <a href="#" class="btn btn-primary">See Product</a>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            });
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
    