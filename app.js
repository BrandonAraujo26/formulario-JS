var elementos = document.querySelectorAll('[type=radio]')

for(var i = 0; i < elementos.length; i++){

    elementos[i].addEventListener('change', function(e) {
        let mudanca = e.target.value;

        if (mudanca == 'correto') {

            let parentNode = e.target.parentNode;
            parentNode.style.backgroundColor = ' green';

            let els = parentNode.parentNode.querySelectorAll('[type=radio]');

            for (var n = 0; n < els.length; n++) {
                els[n].disabled = 'true';
                
            }
            
            






            
        } else if (mudanca == 'incorreto') {

             let parentNode = e.target.parentNode;
            parentNode.style.backgroundColor = ' red ';

            let els = parentNode.parentNode.querySelectorAll('[type=radio]');

            for (var n = 0; n < els.length; n++) {
                els[n].disabled = 'true';
                
            }

            let correta = parentNode.parentNode.querySelector('[value=correto]');
            correta.parentNode.style.backgroundColor = 'green';
           
            
        }
    })
}
