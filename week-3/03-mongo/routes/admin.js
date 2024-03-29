const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
//this means /admin/signup route by using Router
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    //check whether the user with this username already exists

    await Admin.create({
        username,
        password,
    })
    res.json({
        msg: "Admin created successfully",
    })
    
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;

    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price,
    });
    res.json({
        msg: "Course created successfully",
        courseId: newCourse._id,
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const allCourses = await Course.find({});

    res.json({
        courses: allCourses,
    })
});

module.exports = router;