

const fs = require('fs');
const colors = require('colors');
const crearArchivo = ( base =5 ,  ele , hasta =10 )=>{
    
    const promesa = new Promise((resolve, reject)=>{
        if(base){       
            let salida, consola ='';

            for( let i =1 ; i<=hasta;i++){
                        
                consola+=(`${base} ${'X'.blue} ${i} ${'='.blue} ${base*i}\n`);
                salida+=(`${base} X ${i} = ${base*i}\n`);
            }  
            if(ele){
                console.log('======================'.rainbow);
                console.log(`     TABLA DEL ${base}`.rainbow);
                console.log('======================'.rainbow);
                console.log(consola);  
            }            
            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida );        
            resolve(`tabla-${base}.txt`.red);
        }else{
            reject(`Esta mal`);
        }
    });

    return promesa;

}

module.exports = {
    crearArchivo
}

// fs.writeFileSync(`tabla-${num}.txt`, salida , (err)=>{
//     if(err) throw err;
//     console.log(`tabla del ${num} creada`);
// })

