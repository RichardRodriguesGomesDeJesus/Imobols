const masks = {
    name (value) {
        return value
    },
    tel (value) {
        return value
        .replace(/\D/g , '')
        .replace(/^(\d{2})(\d)/ , '($1) $2')
        .replace(/(\d{4})(\d)/ , '$1-$2')
        .replace(/(\d{4})-(\d)(\d{4})/ , '$1$2-$3')
        .replace(/(-\d{4})\d+?$/ , '$1')
    },
    email (value){
        return value
    },
    cep (value) {
        return value
        .replace(/\D/g , '')
    },
    city (value){
        return value
    },
    locality (value){
        return value
    },
    street (value){
        return value
    },
    number (value){
        return value
        .replace(/\D/g , '')
    },
    building (value){
        return value
        
    },
    apartmentNumber (value){
        return value
        
    },
    uf(value){
        return value
        .replace(/\d/,'')
        .replace(/./,'')
    },
    rent (){
        jQuery(function() {
        
            jQuery("#rent").maskMoney({
            prefix:'R$', 
            thousands:'.', 
            decimal:','
        })
        
        });
    },
    mse (value){
        return value
    }
}

document.querySelectorAll('input').forEach(($input) =>{
    const field = $input.dataset.js
    if (field) {
        $input.addEventListener('input', (e)=>{
            e.target.value = masks[field](e.target.value)
        },false)
    } else {
        
    }
} )