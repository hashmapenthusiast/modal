function triggerModal(){
    const modal = document.createElement('div');
    const p = document.createElement('p');
    const closeButton = document.createElement('button');

    closeButton.addEventListener('click', function(e){
        console.log(e)
        console.log(e.path[1])
        e.path[1].remove()
    })

    modal.id = 'modal'
    p.textContent = 'hi there'
    closeButton.textContent = 'close'
    closeButton.id='close';
    modal.appendChild(p)
    modal.appendChild(closeButton)
    document.body.appendChild(modal)

}

const modalButton = document.querySelector('#modalButton')

modalButton.addEventListener('click', triggerModal);

