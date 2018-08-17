var Campground = require("../models/campground");
var Comment = require("../models/comment");
// All the middleware goes here
var middlewareObj = {};

middlewareObj.checkCampgroundOwnership = function(req, res, next){
    if(req.isAuthenticated()){
        Campground.findById(req.params.id, function(err, foundCampground){
           if(err || !foundCampground){
               req.flash("error", "Campground not found");
               res.redirect("back");
           } else {
                // Does User own the campground?
                if(foundCampground.author.id.equals(req.user.id) || req.user.isAdmin){
                    next();
            } else {
                    req.flash("error", "You don't have persmission to  do that");
                    res.redirect("back");
            }
           }
        });
    } else {
        req.flash("error", "Please login to continue!");
        res.redirect("back");
    }
}

middlewareObj.checkCommentOwnership = function(req, res, next){
    if(req.isAuthenticated()){
        Comment.findById(req.params.comment_id, function(err, foundComment){
           if(err || !foundComment){
               req.flash("error", "Comment not found");
               res.redirect("back");
           } else {
                // Does User own the comment?
                if(foundComment.author.id.equals(req.user.id) || req.user.isAdmin){
                    next();
            } else {
                    req.flash("error", "You don't have permission to do that");
                    res.redirect("back");
            }
           }
        });
    } else {
        req.flash("error", "Please log in to continue");
        res.redirect("back");
    }
}

middlewareObj.isLoggedIn = function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error", "Please log in to continue!");
    res.redirect("/login");
}

module.exports = middlewareObj