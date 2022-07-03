import { app } from "./app";
import adminSignup from "./endpoints/adminSignup";
import createRecipe from "./endpoints/createRecipe";
import deleteRecipe from "./endpoints/deleteRecipe";
import deleteUser from "./endpoints/deleteUser";
import followUser from "./endpoints/followUser";
import getProfile from "./endpoints/getProfile";
import getRecipe from "./endpoints/getRecipe";
import getUserFeed from "./endpoints/getUserFeed";
import login from "./endpoints/login";
import signup from "./endpoints/signup";
import unfollowUser from "./endpoints/unfollowUser";
import updateRecipe from "./endpoints/updateRecipe";

app.post('/signup', signup)
app.post('/login', login)
app.post('/admin/signup', adminSignup)

app.get('/user/profile', getProfile)
app.put('/user/follow', followUser)
app.put('/user/unfollow', unfollowUser)
app.get('/user/feed', getUserFeed)
app.get('/user/:id', getProfile)
app.delete('/user/:id', deleteUser)

app.post('/recipe', createRecipe)
app.get('/recipe/:id', getRecipe)
app.put('/recipe/:id', updateRecipe)
app.delete('/recipe/:id', deleteRecipe)