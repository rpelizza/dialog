(function() {

    if (!(/Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor))) {
        var dialogs = document.getElementsByTagName('dialog');
        var overlayModal = document.createElement('div');
        var randomId = '_' + Math.random().toString(36).substr(2, 9);
        overlayModal.style.cssText = 'z-index:998;position:fixed;top:0;left:0;width:100%;height: 100%;background-color:rgba(0, 0, 0, 0.65);display:none;'
        overlayModal.setAttribute('id', randomId);
        document.body.appendChild(overlayModal);
                
        for (var x = 0; x < dialogs.length; x++) {
            var elementClass = (dialogs[x].classList.length > 0) ? dialogs[x].className.split(' ') : null;
            var elementID = (dialogs[x].id.length  > 0) ? dialogs[x].id : null;
            var insideContent = dialogs[x].innerHTML;  
            var newElement = document.createElement('div');
            if (elementClass) newElement.classList = elementClass.join(' ');
            if (elementID) newElement.setAttribute('id', elementID);
            newElement.innerHTML += insideContent;
            newElement.style.cssText = 'display:none;position:fixed;z-index:999;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:-webkit-fit-content;height:-webkit-fit-content;color:black;margin:auto;border-width:initial;border-style:solid;border-color:initial;-webkit-border-image:initial;-o-border-image:initial;border-image:initial;padding:1em;background:white;';
            document.body.appendChild(newElement);            
        }

        Array.prototype.slice.call(dialogs).forEach(function (item) {
            item.parentNode.removeChild(item);
        });
                
        HTMLElement.prototype.showModal = function() {
            document.getElementById(randomId).style.display = 'block';
            this.style.display = 'block';
        }

        HTMLElement.prototype.close = function() {            
            document.getElementById(randomId).style.display = 'none';
            this.style.display = 'none';
        }
    }

}());