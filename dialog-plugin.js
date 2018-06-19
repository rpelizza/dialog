(function() {

    if (!(/Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor))) {
        let dialogs = document.getElementsByTagName('dialog');
                
        for (let x = 0; x < dialogs.length; x++) {
            let elementClass = (dialogs[x].classList.length > 0) ? dialogs[x].className.split(' ') : null;
            let elementID = (dialogs[x].id.length  > 0) ? dialogs[x].id : null;
            let insideContent = dialogs[x].innerHTML;  
            let newElement = document.createElement('div');
            if (elementClass) newElement.classList = elementClass.join(' ');
            if (elementID) newElement.setAttribute('id', dialogs[x].id);
            newElement.innerHTML += insideContent;
            newElement.style.cssText = 'display:none;position:fixed;z-index:999;top:50%;left:50%;transform:translate(-50%,-50%)';
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