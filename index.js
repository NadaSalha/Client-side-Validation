console.log('hello');

const getElement=(elem)=>  document.querySelector(elem);

const validate_fun = (elem)=>{
    let Regex_syntax = /^\S+@\S+\.\S+$/;
    getElement('#error_mes').textContent='';
    if(elem.value.length === 0){
      throw new Error(`You must input the ${elem.name} `);
    }
    if(elem.name === 'email'){
        if(!Regex_syntax.test(elem.value)){
         throw new Error(`You must input the Valid ${elem.name} eg. example@example.com `);
        }
    }else if(elem.name === 'password'){
        Regex_syntax =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"|,.<>/?]).{8,}$/;
        if(!Regex_syntax.test(elem.value)){
         throw new Error(`You must input the Valid ${elem.name} eg. Nada_Salha123`);
        }
    }else if(elem.name === 'confirmPassword'){
        const passwordvalue = getElement(`input[name="password"]`).value;
        if(elem.value !== passwordvalue){
         throw new Error(`You must input the Valid ${elem.name} that equals the ${passwordvalue}`);
        }
    }
}

getElement('#registerForm').addEventListener('submit',(e)=>{
    e.preventDefault();
    try{
         [...getElement('#registerForm').elements].forEach(elem => {
    if(elem.tagName === 'INPUT') validate_fun(elem);
    });
    
    }catch(er){
        getElement('#error_mes').textContent =er.message;
    }  
})

