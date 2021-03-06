const mongoose = require('mongoose');
const User = require('../src/user');
const Comment = require('../src/comment');
const BlogPost = require('../src/blogPost');


describe('Associations', () => {
    let joe, blogPost, comment;

    beforeEach((done) => {

        joe = new User({name: 'Joe'});
        blogPost = new BlogPost({title: 'I Love JS', content: 'Yup It;s Really Is.....'});
        comment = new Comment({content: 'Congrats on great post'});

        //Associate Relationships
        joe.blogPosts.push(blogPost);
        blogPost.comments.push(comment);
        comment.user = joe;
        Promise.all([joe.save(), blogPost.save(), comment.save()])
            .then(() => done());

    });

    it.only('Saves a relation between a user and a blogPost ',  (done) => {

        User.findOne({name: 'Joe'})
            .populate('blogPosts')
            .then((user) => {
                console.log(user);
                console.log(user.blogPosts[0]);
                done();
            });
    });
})