const  mongoose = require('mongoose');

async function conectarDB()
{
    try
    {
        await mongoose.connect(process.env.DATABASE, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });

        console.log("Conectando a la base de datos.");
    }
    catch(error)
    {
        console.log("Error: "+error);
    }
}

module.exports= {conectarDB};