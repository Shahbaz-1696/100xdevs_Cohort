const { Router } = require("express");
const router = Router();
const jwt = require("jsonwebtoken");
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const { JWT_PASSWORD } = require("../config");
const { default: mongoose } = require("mongoose");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    await User.create({
        username, 
        password
    });

    res.json({
        msg: "User created successfully",
    })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.find({
        username,
        password
    });

    if(user){
        const token = jwt.sign({username}, JWT_PASSWORD);
        res.json({
            token,
        });
    } else {
        res.status(411).json({
            msg: "Incorrect email and password",
        })
    }
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const allCourses = await Course.find({});

    res.json({
        courses: allCourses,
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const username = req.username;
    const courseId = req.params.courseId;

    try {
        await User.updateOne({
            username: username,
        }, {
            "$push": {
                purchasedCourses: new mongoose.Types.ObjectId(courseId),
            }
        });

        res.json({
            msge: "Purchase complete",
        })
    } catch (error) {
        res.json({
            msge: "Invalid courseId"
        })
    }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username: req.username,
    });

    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses,
        }
    });

    res.json({
        courses,
    })
});

module.exports = router