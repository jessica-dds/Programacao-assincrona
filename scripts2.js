const { getCityFromZipcode } = require('utils-playground');

// getCityFromZipcode('41256250').then(cidade => {
//     console.log(cidade);
// }).catch((erro) => {
//     console.log(erro);
// });


//console.log(cidade);

const cidade = getCityFromZipcode('41256250');

cidade.then(cidade => {
    console.log(cidade);
});

cidade.catch((erro) => {
    console.log(erro.message);
});