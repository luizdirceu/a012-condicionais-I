let nacionalidade = prompt('Escreva aqui sua nacionalidade').toLowerCase()

const nacionalidadeBrasileira = "brasileira"
const nacionalidadeArgentina = "argentina"
const nacionalidadeUruguaia = "uruguaia"
const nacionalidadeChilena = "chilena"
const nacionalidadeColombiana = 'colombiana'


if (nacionalidade === nacionalidadeBrasileira){console.log("brasileira")}

else if(nacionalidade === nacionalidadeArgentina){console.log('argentina')}

else if(nacionalidade === nacionalidadeUruguaia){console.log("uruguaia")}

else if(nacionalidade === nacionalidadeChilena){console.log("chilena")}

else if(nacionalidade === nacionalidadeColombiana){console.log('colombiana')}

else {console.log('nacionalidade nao encontrada')}