let valorTotal;
limpar();

function adicionar(){
    //recuperar valores nome do produto, quantida e valor
   let produto = document.getElementById('produto').value;
   let nomeProduto = produto.split('-')[0];
   let valorProduto = produto.split('R$')[1];
   let quantidade = document.getElementById('quantidade').value;
   //calcular o preço, o nosso subtotal
   let preco = quantidade * valorProduto;
   let carrinho = document.getElementById('lista-produtos');
   //adicionar no carrinho
   carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorProduto} </span>
        </section>`;
         //atualizar o grande total
         valorTotal = valorTotal+preco;
         let total = document.getElementById('valor-total');
         total.textContent = `R$ ${valorTotal}`
         document.getElementById('quantidade').value = 0;

}
function limpar(){
    valorTotal = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    total = document.getElementById('valor-total').textContent = 'R$ 0';
}