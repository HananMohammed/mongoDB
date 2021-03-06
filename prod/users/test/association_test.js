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

    it('Saves a relation between a user and a blogPost ',  (done) => {

        User.findOne({name: 'Joe'})
            .populate('blogPosts')
            .then((user) => {
               // console.log(user);
               // console.log(user.blogPosts[0].title );
                assert(user.blogPosts[0].title === 'I Love JS')
            });
        done();
    });

    it('saves a full relation tree', (done) => {
        User.findOne({name: 'Joe'})
            .populate({
                //object of a bunch of configuration options
                path: 'blogPosts',
                populate: {
                    path: 'comments',
                    model:'comment',
                    populate:{
                        path:'user',
                        model:'user'
                    }
                }
            })
            .then((user) => {
                console.log(user.blogPosts[0].comment[0]);
                done();

            })
    });

})