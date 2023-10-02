// Verificando se o input está vazio
function Enumero() {
    let num = document.getElementById("fnum")
    if (num.value.length == 0) {
        // Irá retornar falso se estiver vazio
        return false
    } else {
        return true
    }
}
// Verificando se o número está entre 1 e 100
function UmCem() {
        let nu = document.getElementById("fnum")
        if (Number(nu.value) >= 1 && Number(nu.value) <= 100) {
            // Retorna true se estiver entre 1 e 100
            return true
        }
        else {
            return false
        }
}
let nums = []

function adicionar() {
    let EnumeroResult = Enumero(); // Chama a função Enumero e armazena o resultado
    let UmCemResult = UmCem(); // Chama a função UmCem e armazena o resultado

    if (EnumeroResult == false) {
        window.alert("Valores não inseridos")
    } else if (EnumeroResult == true && UmCemResult == false) {
        window.alert("O número não está entre 1 e 100")
    } else  {
        let numero = document.getElementById("fnum")
        let n = Number(numero.value)
        if (nums.includes(n)) {
            // Caso o número já pertença ao array ele não será adicionado
            window.alert(`Número ${n} já adicionado!`)
        } else {
            let item = document.createElement("option")
            let lista = document.getElementById("flista")
            item.text = `Número ${n} foi adicionado`;
            lista.appendChild(item);
            nums.push(n); // Adiciona o número ao array nums
        }
        numero.value = ""; //Limpa o campo de entrada
        numero.focus();  // Coloca o foco de volta no campo de entrada
    }
}

/*
Mostrar total de elementos do array
Mostrar o maior elemento do array
Mostrar o menor valor do array
Somar todos os elementos do array
Fazer a média dos valores digitados
*/

function finalizar() {
    let res = document.getElementById("res")
    let maior = Math.max.apply(null, nums)
    let menor = Math.min.apply(null, nums );
    let soma = 0
    for (let i = 0; i < nums.length; i++) {
        soma += nums[i]
    }    
    let p0 = document.createElement('p')
    let p1 = document.createElement('p')
    let p2 = document.createElement('p')
    let p3 = document.createElement('p')
    let p4 = document.createElement('p')
    p0.innerText = `O total de números digitados foram ${nums.length}.` 
    p1.innerText = `O maior número digitado foi ${maior}.`
    p2.innerText = `O menor número digitado foi ${menor}.`
    p3.innerText = `A soma dos valores é de ${soma}.`
    p4.innerText = `A média dos valores digitados é de ${soma / nums.length}.`

    res.appendChild(p0)
    res.appendChild(p1)
    res.appendChild(p2)
    res.appendChild(p3)
    res.appendChild(p4)
}