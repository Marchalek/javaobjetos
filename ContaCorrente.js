export class ContaCorrente {
    agencia;
    cliente;

    
    _saldo = 0; //usar _ como convenção de campo privado enquanto o # não é implementado oficialmente https://github.com/tc39/proposal-class-fields#private-fields
  

    sacar(valor){
        if(this._saldo >= valor) {
            this._saldo -= valor;
            return valor
        }
        else {
            console.log("Não foi realizado o saquei devido a saldo insuficiente")
        }
    }

    depositar(valor){
        if (valor<=0) return;
        this._saldo += valor;
    }
   
    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}