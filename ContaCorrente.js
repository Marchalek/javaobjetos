import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    //publico
    static  numeroDeContas = 0;
    agencia;
    
    //privado
    _cliente;    
    _saldo = 0; //usar _ como convenção de campo privado enquanto o # não é implementado oficialmente https://github.com/tc39/proposal-class-fields#private-fields


    //setters e getters
    set cliente(novoValor){
        if (novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    sacar(valor){
        if(this._saldo >= valor) {
            this._saldo -= valor;
            return valor
        }
        else {
            console.log("Não foi realizado o saquei devido a saldo insuficiente")
        }
    }

    //construtores
    constructor (agencia, cliente){
        this.cliente = cliente
        this.agencia = agencia      
        ContaCorrente.numeroDeContas += 1
    }


    //metódos da classee
    depositar(valor){
        if (valor<=0) return;
        this._saldo += valor;
    }
   
    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}