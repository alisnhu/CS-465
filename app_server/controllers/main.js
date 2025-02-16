const index = (req,res)=>{
    res.render('index',{title: "Trawlr Gateways"});
};

module.exports = {
    index
};