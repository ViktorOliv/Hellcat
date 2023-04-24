
let formBtn = document.querySelector(".btn-order");

function formValidate() {
    let formGroup = document.querySelector(".form-group");
    let formInput = formGroup.querySelectorAll("input");

    let formError = 0;

    formGroup.classList.remove('form-group_error');

    formInput.forEach(input => {
        formRemoveError(input);
        

        if (input.id == 'tel') {
            if (!/^\d+$/.test(input.value)) {
                formAddError(input);
                formError++;
            };
        };

        if (input.id == 'tel' || input.id == 'pib' || input.id == 'location') {
            if (input.value == '') {
                formAddError(input);
                formError++;
            };
        };

    });
    
    if (formError != 0) {
        formGroup.classList.add('form-group_error');
    }

return formError;

};


function formAddError(input) {
    input.classList.add('_error');
};

function formRemoveError(input) {
    input.classList.remove('_error');
};
