

const bodyParser = require("body-parser");
const router = require('./routes');

app.use(cors());

require('./models/db');
app.set("/api/v1", router);

app.set('port', process.env.PORT || 8080);

let server = app.listen(app.settings.port, () => console.log('listening on ', app.settings.port));

// app.get("/*",(req,res) => {
//     res.status(404).json({error:"Page not found for now"});
// });

//Routes
const RegisterRoute = require('./routes/register');
app.use('/', RegisterRoute);

const LoginRoute = require('./routes/login');
app.use('/', LoginRoute);

const CreatePlanRoute = require('./routes/createplan');
app.use('/', CreatePlanRoute);


// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './public', 'index.html'));
//   });