const precio_C_M_C = 400;
const precio_T_c = 600;
const precio_E_D = 500;
let multiplicar = () => {
        let km=parseFloat(document.getElementById('n1').value);
        let total = km * precio_C_M_C;
        document.getElementById(result).value=total;
}