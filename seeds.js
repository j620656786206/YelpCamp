var mongoose   = require("mongoose");
var Campground = require("./models/campground");
var Comment    = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest", 
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacus nunc, consectetur vel dapibus at, ultricies eu libero. Praesent tempus at purus sit amet hendrerit. Suspendisse non porttitor purus. Ut in blandit nisl. Etiam et aliquam arcu, nec pellentesque nisi. In condimentum ipsum libero. Integer id magna ultricies, viverra magna non, gravida lorem. Nullam in augue justo."
    },
    {
        name: "Desert Mesa", 
        image: "http://img1.sunset.timeinc.net/sites/default/files/styles/1000x1000/public/image/2016/10/main/hoodview-campground-0510.jpg?itok=B8Eb65Uf",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacus nunc, consectetur vel dapibus at, ultricies eu libero. Praesent tempus at purus sit amet hendrerit. Suspendisse non porttitor purus. Ut in blandit nisl. Etiam et aliquam arcu, nec pellentesque nisi. In condimentum ipsum libero. Integer id magna ultricies, viverra magna non, gravida lorem. Nullam in augue justo."
    },
    {
        name: "Canyon Floor", 
        image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lacus nunc, consectetur vel dapibus at, ultricies eu libero. Praesent tempus at purus sit amet hendrerit. Suspendisse non porttitor purus. Ut in blandit nisl. Etiam et aliquam arcu, nec pellentesque nisi. In condimentum ipsum libero. Integer id magna ultricies, viverra magna non, gravida lorem. Nullam in augue justo."
    }
]

function seedDB(){
   //Remove all campgrounds
   Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
         //add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err)
                } else {
                    console.log("added a campground");
                    //create a comment
                    Comment.create(
                        {
                            text: "This place is great, but I wish there was internet",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment");
                            }
                        });
                }
            });
        });
    }); 
    //add a few comments
}

module.exports = seedDB;
