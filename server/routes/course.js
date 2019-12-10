var express = require('express');
var Course = require('../models/course');
var mongoose = require('mongoose');

const router = express.Router();

/*
MAKE COURSE
POST
 */

router.post('/', (req, res) => {
    // CHECK LOGIN STATUS
    if(typeof req.session.loginInfo === 'undefined') {
        return res.status(403).json({
            error : "NOT LOGGED IN",
            code : 1
        })
    }

    console.log(req.body.contents);
    let course = new Course({
        master : req.session.loginInfo.username,
        //members
        contents: req.body.contents
    });


    course.save( err => {
        if(err) throw err;
        return res.json({ success : true });
    });
});



/*
GET COURSE
 */

router.get('/', (req, res) => {
    Course.find()
        .sort({"_id": -1})
        .limit(10)
        .exec((err, memos) =>{
            if(err) throw err;
            res.json(memos);
        });
});


/*
DELETE COURSE
 */

router.delete('/:course_id', (req, res) => {
    // CHECK MEMO ID
    if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({
            error: "INVALID ID",
            code : 1
        });
    }

    // CHECK LOGIN STATUS
    if(typeof req.session.loginInfo === 'undefined') {
        return res.status(403).json({
            error: "NOT LOGGED IN",
            code: 2
        });
    }

    Course.findById(req.params.course_id, (err, course)=>{
        if(err) throw err;

        if(!course) {
            return res.status(404).json({
                error: "NO SUCH COURSE",
                code : 3
            })
        }

        if(course.master != req.session.loginInfo.username) {
            return res.status(403).json({
                error: "PERMISSION FAILURE",
                code : 4
            })
        }


        // if no error,
        Course.remove({_id: req.params.id}, err => {
            if(err) throw err;
            res.json({ success : true });
        });
    });
});



/*
UPDATE COURSE

PUT METHOD
 */

router.put('/:course_id/join', (req, res) => {
    if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({
            error: "INVALID ID",
            code : 1
        })
    }

    Course.findById(req.params.id, (err, course) => {
        if(err) throw err;

        if(!course) {
            return res.status(403).json({
                error: "NO SUCH COURSE",
                code: 4
            })
        }

        course.members.append(req.session.loginInfo.username) ;
        course.save((err, course) => {
            if(err) throw err;
            return res.json({
                success: true,
                course
            });
        });
    });
});

module.exports = router;