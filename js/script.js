let checkbox = document.querySelector('#checkbox')

let checkboxLabel = document.querySelector('.checkbox-label')

checkboxLabel.addEventListener('click', ()=>{
// function verifica(){
if(checkbox.checked == false){

    document.querySelector('body').style.cssText = `
        background-color: #fff;
        transition: background-color 1s ease-in-out;
    }
    `
    document.querySelector('h1').style.cssText = `
        color: #2c302c;
        transition: 2s ease-in-out;
    }
    `
    document.querySelector('#paragrafo1').style.cssText = `
        color: #2c302c;
        transition: 2s ease-in-out;
    }
    `

    document.querySelector('#paragrafo2').style.cssText = `
        color: #2c302c;
        transition: 2s ease-in-out;
    }
    `

    document.querySelector('#exclamacao').style.cssText = `
        opacity: 0;
        color: #2c302c;
        animation: exclamacao 1s;
        animation-iteration-count: infinite;
        transition: 2s ease-in-out;
    }
    `   
    document.querySelector('footer').style.cssText = `
        background-color: rgb(212, 159, 59);
        transition: background-color 1s ease-in-out;
    }
    `   
} else {
    document.querySelector('body').style.cssText = `
        background-color: #2c302c;
        transition: background-color 1s ease-in-out;
    }
    `
    document.querySelector('h1').style.cssText = `
        color: #fff;
        transition: 2s ease-in-out;
    }
    `
    document.querySelector('#paragrafo1').style.cssText = `
        color: #fff;
        transition: 2s ease-in-out;
    }
    `
    document.querySelector('#paragrafo2').style.cssText = `
        color: #fff;
        transition: 2s ease-in-out;
    }
    `

    document.querySelector('#exclamacao').style.cssText = `
        opacity: 0;
        color: #fff;
        animation: exclamacao 1s;
        animation-iteration-count: infinite;
        transition: 2s ease-in-out;
    }
    `

    document.querySelector('footer').style.cssText = `
        background-color: rgb(38, 39, 44);
        transition: background-color 1s ease-in-out;
    }
    `   
}})