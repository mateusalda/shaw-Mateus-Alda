import { app } from "./app";
import createRecipe from "./endpoints/createRecipe";
import followUser from "./endpoints/followUser";
import getProfile from "./endpoints/getProfile";
import getRecipe from "./endpoints/getRecipe";
import login from "./endpoints/login";
import signup from "./endpoints/signup";
import unfollowUser from "./endpoints/unfollowUser";

app.post('/signup', signup)
app.post('/login', login)

app.get('/user/profile', getProfile)
app.get('/user/:id', getProfile)
app.put('/user/follow', followUser)
app.put('/user/unfollow', unfollowUser)

app.post('/recipe', createRecipe)
app.get('/recipe/:id', getRecipe)