
export const validations = (inputs) => {

    const errors = {}
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const atLeastOneNumberRegex = /.*[0-9].*/

    const validEmail = (
        regexEmail.test(inputs.email) &&
        inputs.email.length <= 35
    )
    if(!validEmail) {
        errors['email'] = "Debes ingresar un email valido";
    }

    const validPassword = (
        atLeastOneNumberRegex.test(inputs.password) &&
        inputs.password.length >= 6 &&
        inputs.password.length <= 10
    )
    if(!validPassword) {
        errors['password'] = "Debes ingresar una contraseña valida";
    }

    return errors
}

