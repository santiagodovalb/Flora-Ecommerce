const passport = require("passport");
const session = require("express-session");
const FacebookStrategy = require("passport-facebook").Strategy;
const { User } = require("../../db/models");
const bcrypt = require("bcrypt");

module.exports = (app) => {

    app.use(session({ secret: "flora", resave: true, saveUninitialized: true }));
    app.use(passport.initialize());
    app.use(passport.session());

    passport.use(new FacebookStrategy(
    {
        clientID: '647382959992261',
        clientSecret: 'b5054fc3dd2252171264270cc3911044',
            callbackURL: "http://localhost:3001/api/users/auth/facebook/callback",
        profileFields:['id','name','emails']
        
    },
    function(accessToken, refreshToken, profile, done) {
        User.findOne({ where: { facebookId: profile._json.id } }).then(async(user) => {
            if (user) {
                return done(null,user)
            } else {
                const { email, name, id } = profile._json
                console.log(profile)
                const facebookHash= await bcrypt.genSalt(10)
                const newUser = await User.create({ nick: name, email: email, password: facebookHash, direction: '', facebookId: id })
                console.log('LLEGUE')
                return done(null,newUser)
                }
        })
    }
    ));
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findByPk(id).then((user) => done(null, user));
    });

    
}