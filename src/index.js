const express=require("express")
const app=express()
const path=require("path")
const hbs=require("hbs")
const ejs=require("ejs")
const collections=require("./mongodb")
const templatepath=path.join(__dirname,"../templates")
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/public',express.static("public"))
app.use('/images',express.static('images'))
app.use('/sounds',express.static('sounds'))
app.set("view engine","ejs")
app.set("views",templatepath)
app.use('/src',express.static("src"))

app.get("/",function(req,res){
    res.render("Home");
})

app.get("/signup",function(req,res){
    res.render("signup");
})
app.get("/login",function(req,res){
    res.render("login");
})
app.get("/easy",function(req,res){
    res.render("easy");
})
app.get("/medium",function(req,res){
    res.render("medium");
})
app.get("/hard",function(req,res){
    res.render("hard");
})
app.get("/home_1",function(req,res){
    res.render("home_1")
})
app.get("/easy_1",function(req,res){
    res.render("easy_1",{
        answer:"your answer will be displayed Here"
    });
});
app.get("/easy_2",function(req,res){
    res.render("easy_2",{
        answer:"your answer will be displayed Here"
    });
});
app.get("/easy_3",function(req,res){
    res.render("easy_3",{
        answer:"your answer will be displayed Here"
    });
});
app.get("/medium_1",function(req,res){
    res.render("medium_1",{
        answer:"your answer will be displayed Here"
    });
});
app.get("/medium_2",function(req,res){
    res.render("medium_2",{
        answer:"your answer will be displayed Here"
    });
});
app.get("/medium_3",function(req,res){
    res.render("medium_3",{
        answer:"your answer will be displayed Here"
    });
});
app.get("/hard_1",function(req,res){
    res.render("hard_1",{
        answer:"your answer will be displayed Here"
    });
});
app.get("/hard_2",function(req,res){
    res.render("hard_2",{
        answer:"your answer will be displayed Here"
    });
});
app.get("/hard_3",function(req,res){
    res.render("hard_3",{
        answer:"your answer will be displayed Here"
    });
});
app.get("/logout",function(req,res){
    res.render("/")
})
app.post("/signup",async(req,res)=>{
const data={
    name:req.body.name,
    password:req.body.password,
    email:req.body.email
}
await collections.insertMany([data])
res.redirect("/login")
})
app.post("/easy_1",function(req,res){
var k=req.body.answer;
var ans=['a','d','w'];
var A=k.split(',')
console.log(A)
A.sort();
console.log(A)
console.log(A.toString())
console.log(ans.toString())
if(A.toString()===ans.toString()){
    res.render("easy_1",{
        answer:"Your Answer is Right!"
    })
}
else{
    res.render("easy_1",{
        answer:"Oops your Answer is Wrong!"
    })
}
})
app.post("/easy_2",function(req,res){
    var k=req.body.answer;
    var ans=['a','d','w','w'];
    var A=k.split(',')
    console.log(A)
    A.sort();
    console.log(A)
    console.log(A.toString())
    console.log(ans.toString())
    if(A.toString()===ans.toString()){
        res.render("easy_2",{
            answer:"Your Answer is Right!"
        })
    }
    else{
        res.render("easy_2",{
            answer:"Oops your Answer is Wrong!"
        })
    }
    })
    app.post("/easy_3",function(req,res){
        var k=req.body.answer;
        var ans=['a','a','d','d','w','w'];
        var A=k.split(',')
        console.log(A)
        A.sort();
        console.log(A)
        console.log(A.toString())
        console.log(ans.toString())
        if(A.toString()===ans.toString()){
            res.render("easy_3",{
                answer:"Your Answer is Right!"
            })
        }
        else{
            res.render("easy_3",{
                answer:"Oops your Answer is Wrong!"
            })
        }
        })
        app.post("/medium_1",function(req,res){
            var k=req.body.answer;
            var ans=['a','d','j','l','w'];
            var A=k.split(',')
            console.log(A)
            A.sort();
            console.log(A)
            console.log(A.toString())
            console.log(ans.toString())
            if(A.toString()===ans.toString()){
                res.render("medium_1",{
                    answer:"Your Answer is Right!"
                })
            }
            else{
                res.render("medium_1",{
                    answer:"Oops your Answer is Wrong!"
                })
            }
            })
            app.post("/medium_2",function(req,res){
                var k=req.body.answer;
                var ans=['a','a','d','d','j','j','l','w'];
                var A=k.split(',')
                console.log(A)
                A.sort();
                console.log(A)
                console.log(A.toString())
                console.log(ans.toString())
                if(A.toString()===ans.toString()){
                    res.render("medium_2",{
                        answer:"Your Answer is Right!"
                    })
                }
                else{
                    res.render("medium_2",{
                        answer:"Oops your Answer is Wrong!"
                    })
                }
                })
                app.post("/medium_3",function(req,res){
                    var k=req.body.answer;
                    var ans=['a','a','d','j','j','l','w','w'];
                    var A=k.split(',')
                    console.log(A)
                    A.sort();
                    console.log(A)
                    console.log(A.toString())
                    console.log(ans.toString())
                    if(A.toString()===ans.toString()){
                        res.render("medium_3",{
                            answer:"Your Answer is Right!"
                        })
                    }
                    else{
                        res.render("medium_3",{
                            answer:"Oops your Answer is Wrong!"
                        })
                    }
                    })
                    app.post("/hard_1",function(req,res){
                        var k=req.body.answer;
                        var ans=['a','d','j','k','l','w'];
                        var A=k.split(',')
                        console.log(A)
                        A.sort();
                        console.log(A)
                        console.log(A.toString())
                        console.log(ans.toString())
                        if(A.toString()===ans.toString()){
                            res.render("hard_1",{
                                answer:"Your Answer is Right!"
                            })
                        }
                        else{
                            res.render("hard_1",{
                                answer:"Oops your Answer is Wrong!"
                            })
                        }
                        })
                        app.post("/hard_2",function(req,res){
                            var k=req.body.answer;
                            var ans=['a','d','j','j','k','k','l','w','w'];
                            var A=k.split(',')
                            console.log(A)
                            A.sort();
                            console.log(A)
                            console.log(A.toString())
                            console.log(ans.toString())
                            if(A.toString()===ans.toString()){
                                res.render("hard_2",{
                                    answer:"Your Answer is Right!"
                                })
                            }
                            else{
                                res.render("hard_2",{
                                    answer:"Oops your Answer is Wrong!"
                                })
                            }
                            })
                            app.post("/hard_3",function(req,res){
                                var k=req.body.answer;
                                var ans=['a','a','d','d','j','j','k','k','l','w','w'];
                                var A=k.split(',')
                                console.log(A)
                                A.sort();
                                console.log(A)
                                console.log(A.toString())
                                console.log(ans.toString())
                                if(A.toString()===ans.toString()){
                                    res.render("hard_3",{
                                        answer:"Your Answer is Right!"
                                    })
                                }
                                else{
                                    res.render("hard_3",{
                                        answer:"Oops your Answer is Wrong!"
                                    })
                                }
                                })
app.post("/login",async(req,res)=>{
    try{
     const check=await collections.findOne({email:req.body.email})
     if(check.password===req.body.password){
        res.render("home_1")
     }
     else{
        res.send("wrong password")
     }
    }
    catch{
res.send("wrong details");
    }
    res.render("home_1")
    })
let port =process.env.PORT;
if(port==null ||port=="){
   port=3000;
   }
app.listen(port,()=>{
    console.log("port connected");
})
