(function() {

    if (!(/Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor))) {
        let dialogs = document.getElementsByTagName('dialog');
                
        for (let x = 0; x < dialogs.length; x++) {            
            let newElement = document.createElement('div');
            let insideContent = dialogs[x].innerHTML;
            newElement.setAttribute('id', dialogs[x].id);
            newElement.innerHTML += insideContent;
            newElement.style.cssText = 'position:none;z-index:999;top:50%;left:50%;transform:translate(-50%,-50%)';
            document.body.appendChild(newElement);            
        }

        Array.prototype.slice.call(dialogs).forEach((item) => {
            item.parentNode.removeChild(item);
        });
                
        HTMLElement.prototype.showModal = function() {
            alert('Substituição de showModal()');
            console.log(this);
        }

        HTMLElement.prototype.close = function() {
            alert('Substituição de close()');
            console.log(this);
        }    
    }

}());