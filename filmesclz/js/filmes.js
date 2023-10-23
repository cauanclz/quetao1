//Cauan Cleizer e Diego Gonçalves





const filme=document.querySelector('#filme')
const sinopse=document.querySelector('#sinopse')
const f1=document.querySelector('#hanco')
const f2=document.querySelector('#homem')
const f3=document.querySelector('#grito')
const f4=document.querySelector('#pense ')


f1.addEventListener('click',troca1)
f2.addEventListener('click',troca2)
f3.addEventListener('click',troca3)
f4.addEventListener('click',troca4)

function troca1(){
filme.src="images/Hancock_1.jpg"
sinopse.textContent="Hancock, um super-herói desajeitado, protege os cidadãos de Los Angeles mas causa danos colaterais a cada ato heroico que realiza. Hancock não se importa com o que as pessoas pensam. Entretanto, após salvar a vida de um executivo, ele conhece a bela esposa dele e descobre que, apesar de tudo, é um homem sensível."
}
function troca2(){
 filme.src="images/homem.jpg"
 sinopse.textContent="Acompanhe a história de Desmond T. Doss, um médico do exército americano que, durante a Segunda Guerra Mundial, se recusa a pegar em armas. Durante a Batalha de Okinawa ele trabalha na ala médica e salva cerca de 75 homens."   
}
function troca3(){
filme.src="images/ogrito.webp"    
sinopse.textContent="Uma enfermeira americana que mora e trabalha em Tóquio é exposta a uma maldição misteriosa em que um espírito se apodera da pessoa, desencadeando um violento surto de raiva, antes de clamar sua vida e passar à próxima vítima."

}
function troca4(){
 filme.src="images/pense.webp"   
 sinopse.textContent="As mulheres têm uma arma secreta para triunfar em suas relações: um livro que as ajuda a entender a mente masculina. Quatro amigos verão como suas mulheres tomam o controle da relação. Este poderia ser o final da eterna luta entre os sexos."
}