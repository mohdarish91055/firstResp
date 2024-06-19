let input=document.querySelector('.input');
    let img=document.querySelector('img');
    let size=document.querySelector('select');
    let btn=document.querySelector('button');
    let para=document.querySelector('p');
    let tag=document.querySelector('.tag');
    let slt=document.querySelector('#select');
    btn.addEventListener('click',()=>{
        if(input.value==''){
            para.innerText='Please Enter Text';
            img.src='';
            tag.innerText='';
            input.style.borderColor="red";
        }

        else if(slt.value=='50X50'){
            para.innerText='';
            let url='https://api.qrserver.com/v1/create-qr-code/?size=50x50&data='+input.value;
            img.src=url;
            console.log(input.value);
            tag.innerText='Please scan';
            input.style.borderColor="black";
        } 
        else if(slt.value=='100X100'){
            para.innerText='';
            let url='https://api.qrserver.com/v1/create-qr-code/?size=100x100&data='+input.value;
            img.src=url;
            console.log(input.value);
            tag.innerText='Please scan';
            input.style.borderColor="black";
        } 
        else if(slt.value=='150X150'){
            para.innerText='';
            let url='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='+input.value;
            img.src=url;
            console.log(input.value);
            tag.innerText='Please scan';
            input.style.borderColor="black";
        } 
        
    }) 