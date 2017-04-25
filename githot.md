## How to get just one file from another branch

I am using git and working on master branch.
This branch has a file called app.js.

I have an experiment branch in which I made a bunch of changes and tons of commits.
Now I want to bring all the changes done only to app.js from experiment to master branch.

How do I do that?

Once again I do not want a merge.
I just want to bring all the changes in app.js from experiment branch to master branch.

command:
git checkout master               # first get back to master
git checkout experiment -- app.js # then copy the version of app.js from branch "experiment"

P.S git checkout <brachname> -- .
###################################################
