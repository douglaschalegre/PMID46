import app from './app'

const PORT: number = 1337;

app.listen(process.env.PORT || PORT, () =>{
    console.log(`Server started on port ${PORT}`)
});