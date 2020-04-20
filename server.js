const app = require("express")()
const expressLayouts=require("express-ejs-layouts")
const address=require("address")


app.use(expressLayouts)
app.set("view engine","ejs")

app.get("/",(req,res)=>{
  res.render("welcome")
})

app.get("/getIP", (req, res) => {
//   const ipv4=address.ip()
//   const ipv6=address.ipv6();
//   address.mac((err, addr)=> {
//   mac=addr
//   if(err){
//     mac="Something went wrong! we are working on it."
//   }
// });
var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
if (ip.substr(0, 7) == "::ffff:") {
  ip = ip.substr(7)
}
  res.render("ip_show",{ip})
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`connected to port ${port}`))