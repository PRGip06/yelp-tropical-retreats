var mongoose   = require("mongoose");
var Campground = require("./models/campground");
var Comment    = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest",
        image: "https://farm7.staticflickr.com/6083/6082674150_bd45be52d6.jpg",
        description: "In in ipsum sed turpis lobortis blandit. Nulla magna neque, dignissim ut sem ut, ultricies hendrerit lacus. Ut eget magna turpis. Vivamus pulvinar urna congue ligula varius molestie. Sed a tellus vestibulum, sagittis neque eget, dictum est. Sed ullamcorper nisi odio, sed rutrum nibh accumsan in. Cras et justo tortor. Ut aliquet ornare eros id dignissim.",
        author: {
            id: "5b1aa5d9ec3b44145e62ceff",
            username: "TomatoHead"
        }
    },
    {
        name: "Bayou Camp",
        image: "https://farm9.staticflickr.com/8041/8000952551_5d2c44aeed.jpg",
        description: "In in ipsum sed turpis lobortis blandit. Nulla magna neque, dignissim ut sem ut, ultricies hendrerit lacus. Ut eget magna turpis. Vivamus pulvinar urna congue ligula varius molestie. Sed a tellus vestibulum, sagittis neque eget, dictum est. Sed ullamcorper nisi odio, sed rutrum nibh accumsan in. Cras et justo tortor. Ut aliquet ornare eros id dignissim.",
        author: {
            id: "5b1aa5d9ec3b44145e62cf01",
            username: "JonelD"
        }
    },
    {
        name: "Sleepy Fortress",
        image: "https://farm3.staticflickr.com/2934/14137144772_ef53849ae0.jpg",
        description: "In in ipsum sed turpis lobortis blandit. Nulla magna neque, dignissim ut sem ut, ultricies hendrerit lacus. Ut eget magna turpis. Vivamus pulvinar urna congue ligula varius molestie. Sed a tellus vestibulum, sagittis neque eget, dictum est. Sed ullamcorper nisi odio, sed rutrum nibh accumsan in. Cras et justo tortor. Ut aliquet ornare eros id dignissim.",
         author: {
            id: "5b1aa5d9ec3b44145e62cf00",
            username: "Stephen James"
        }
    }
];

function seedDB(){
    //Remove all campgrounds
    Campground.remove({}, function(err){
        // if(err){
        //     console.log(err);
        // }    
        // console.log("removed campgrounds!");
        // //Add a few campgrounds
        // data.forEach(function(seed){
        //     Campground.create(seed, function(err, campground){
        //         if(err){
        //             console.log(err);
        //         } else {
        //             console.log("added a campground");
        //             //create a comment
        //             Comment.create(
        //                 {
        //                     text: "This place is great, but I wish there was internet",
        //                     author: {
        //                         id: "5b1abfead6c95c1d73356635",
        //                         username: "Homer"
        //                     }
        //                 }, function(err, comment){
        //                     if(err){
        //                         console.log(err);
        //                     } else {
        //                         campground.comments.push(comment);
        //                         campground.save();
        //                         console.log("Created new comment");
        //                     }
        //                 });
        //         }
        //     });
        // });
    });
    
    //Add a few comments
}
    
module.exports = seedDB;