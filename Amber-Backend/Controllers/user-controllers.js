const dotenv = require('dotenv');
dotenv.config();
const bcrypt = require('bcryptjs');
const User = require("../models/Users");
const jwt = require('jsonwebtoken');
const { validationResult } = require("express-validator");
const distance = require('google-distance-matrix');

const HttpError = require("../models/http-error");

const signup = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new HttpError("Invalid inputs passes, please check the provided data.", 422);
        return next(error);
    }

    const { name, email, password } = req.body;

    let exsistingUser;
    try {
        exsistingUser = await User.findOne({ email: email });
    } catch (err) {
        const error = new HttpError("Signup failed, please try again.", 500);
        return next(error);
    }

    if (exsistingUser) {
        const error = new HttpError("User with the provided email already exists again, try to login or signup with a different mail.", 422);
        return next(error);
    }

    let hashedPassword;

    try {
        hashedPassword = await bcrypt.hash(password, 12);
    } catch (err) {

    }

    const createdUser = new User({
        name,
        email,
        password: hashedPassword
    });

    try {
        await createdUser.save();
    } catch (err) {
        const error = new HttpError("Signing up failed, please try again", 500);
        return next(error);
    }

    const token = jwt.sign(
        { ...createdUser },
        'huehue_secret-key_huehue',
        {
            expiresIn: '1h'
        }
    );

    res.status(201).json({
        ...createdUser._doc,
        token: token,
        tokenExpiration: 1
    });
}

const login = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new HttpError("Invalids input passed, please try again.", 422);
        return next(error);
    }


    const { email, password } = req.body;

    let exsistingUser;
    try {
        exsistingUser = await User.findOne({ email: email });
    } catch (err) {
        const error = new HttpError("Login failed, please try again.", 500);
        return next(error);
    }

    if (!exsistingUser) {
        const error = new HttpError("Invalid credentials provided, please try again.", 401);
        return next(error);
    }

    let isValidPassword = false;
    try {
        isValidPassword = await bcrypt.compare(password, exsistingUser.password);
    } catch (err) {
        const error = new HttpError("Could not login, please check your credentials and try again.", 401);
        return next(error);
    }

    if (!isValidPassword) {
        const error = new HttpError("Invalid credentials provided, please try again.", 401);
        return next(error);
    }

    const token = jwt.sign(
        { userId: exsistingUser._id, email: exsistingUser.email, name: exsistingUser.name },
        'huehue_secret-key_huehue',
        {
            expiresIn: '1h'
        }
    );

    res.json({
        userId: exsistingUser.id,
        token: token,
        tokenExpiration: 1,
        name: exsistingUser.name
    });

}

const selectDetails = async (req, res, next) => {
    const { cardId, location } = req.body;

    var origins = ['31.706241472131726, 76.52771611575828'];
    var destinations = [`${location.latitude}, ${location.longitude}`];

    // distance.key(process.env.MAPS_API_KEY);
    distance.units('metric');

    distance.matrix(origins, destinations, function (err, distances) {
        if (err) {
            return console.log(err);
        }
        if (!distances) {
            return console.log('no distances');
        }
        if (distances.status == 'OK') {
            for (var i = 0; i < origins.length; i++) {
                for (var j = 0; j < destinations.length; j++) {
                    var origin = distances.origin_addresses[i];
                    var destination = distances.destination_addresses[j];
                    if (distances.rows[0].elements[j].status == 'OK') {
                        var distance = distances.rows[i].elements[j].distance.text;
                        var duration = distances.rows[i].elements[j].duration.text;
                    } else {
                        console.log(destination + ' is not reachable by land from ' + origin);
                    }
                }
            }
        }

        const confirmationToken = jwt.sign(
            {
                distance: distance,
                duration: duration,
            },
            'huehue_secret-key_huehue',
            {
                expiresIn: '1h'
            }
        );

        if(distance && duration) {
            res.json({
                distance: distance,
                duration: duration,
                confirmationToken: confirmationToken,
                tokenExpiration: 1
            });
        }

    });


}

const payment = async (req, res, next) => {
    //
}

exports.login = login;
exports.signup = signup;
exports.selectDetails = selectDetails;
exports.payment = payment;