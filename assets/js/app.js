
// get element 
const post_form = document.getElementById('add-post-form');
const mcg = document.querySelector('.mcg')
const all_post_area = document.querySelector('.all-post-area')


const allData =  () => {

    const data = getLsData('fb-data')

    let list = '';
    if(data) {
            data.reverse().map ( data => {

                list += `
                
                    <div class="card mt-3">
                        <div class="card-body">
                            <div class="post-area">
                                <div class="post-item">
                                    <div class="aut-info mb-3">
                                        <div class="a-photo ">
                                            <img src="${data.aphoto}" alt="">
                                            
                                        </div>
                                        <div class="a-name ">
                                            <span>${data.aname}</span>
                                            <div class="a-date">
                                                <span>4 hrs  · </span>
                                                <i class="fa-solid fa-earth-americas"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="post-info">
                                        <p>${data.pname}</p>
                                        <div class="post-image">
                                            <img src="${data.pphoto}" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            
                `
            })
            }

            if(!data) {
                list = `
                <div class="card my-3">
                    <div class="card-body">
                        <h2 class="text-center">Post not pound</h2>
                    </div>
                </div>
                ` 
            }

    all_post_area.innerHTML = list;

}

allData()
// get post form data 
post_form.addEventListener('submit', (e) =>{
    e.preventDefault();

    let form_data = new FormData(e.target);
    let data = Object.fromEntries(form_data.entries())
    let {aname, aphoto, pname, pphoto} = Object.fromEntries(form_data.entries())

    if (!aname || !aphoto || !pname) {
        mcg.innerHTML = setAlert('Felds are Record')
    }else {
        mcg.innerHTML = setAlert('Data Stable :)', 'success')
        setLsData('fb-data', data)
        allData()
        e.target.reset()
    }


    
});

