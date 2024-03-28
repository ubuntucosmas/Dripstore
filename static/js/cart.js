var updateBtns = document.getElementsByClassName('update-cart');
Array.from(updateBtns).forEach(function(updateBtn) {
    updateBtn.addEventListener('click', function(){
        var productId = this.dataset.product
        var action = this.dataset.action
        console.log('productId:',productId, 'action:',action )
        console.log('USER:',user)
        if (user === 'AnonymousUser'){
            console.log('not logged in')
        }
        else{
            updateUserOrder(productId, action)
        }
    })
});

function updateUserOrder(productId, action){
    console.log('logged in sending data....')
    var url = '/update_item/'

    fetch(url, {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({'productId':productId, 'action':action})
}).then((response)=>{
    return response.json
    })

    .then((response)=>{
        console.log('data:', data)
  })
}