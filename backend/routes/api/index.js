const router = require("express").Router();
import QuestionRoutes from "./questionRoutes.js";
import UserRoutes from "./userRoutes.js";
// import LoginPage from "../../../frontend/src/pages/LoginPage.js";
import { restoreUser } from '../../utils/auth.js';
import askQuestionRoutes from "./askQuestionRoutes.js";
import { requireAuth } from '../../utils/auth.js';
import axios from "axios";


router.use(restoreUser);
// backend/routes/api/index.js

router.use("/session", sessionRouter);

router.use("/user", UserRoutes);

router.use("/questions", QuestionRoutes);

router.use("/ask", askQuestionRoutes);


const API=axios.create({
  baseURL:"http://localhost:5000"
});

API.interceptors.request.use((req)=>{
  if(localStorage.getItem("Profile")){
      req.headers.Authorization=`Bearer ${
          JSON.parse(localStorage.getItem("Profile")).token
      }`;
  }
  return req;
})

export const login=(authdata)=>API.post("user/login",authdata);
export const signup=(authdata)=>API.post("user/signup",authdata);
export const getallusers=()=> API.get("/user/getallusers");
export const updateprofile=(id,updatedata)=>API.patch(`user/update/${id}`,updatedata)


export const postquestion=(questiondata)=>API.post("/questions/Ask",questiondata);
export const getallquestions=()=>API.get("/questions/get");
export const deletequestion=(id)=>API.delete(`/questions/delete/${id}`);
export const votequestion=(id,value)=>API.patch(`/questions/vote/${id}`,{value});


export const postanswer=(id,noofanswers,answerbody,useranswered,userid)=>API.patch(`/answer/post/${id}`,{noofanswers,answerbody,useranswered,userid});
export const deleteanswer=(id,answerid,noofanswers)=>API.patch(`/answer/delete/${id}`,{answerid,noofanswers});


// // GET /api/set-token-cookie
import { setTokenCookie } from '../../utils/auth.js';
import { User } from '../../db/models';
router.get('/api/set-token-cookie', async (_req, res) => {
  const user = await User.findOne({
      where: {
        username: 'Demo-lition'
      }
    });
  setTokenCookie(res, user);
  return res.json({ user: user });
});

// GET /api/restore-user


router.get(
  '/api/restore-user',
  (req, res) => {
    return res.json(req.user);
  }
);

// GET /api/require-auth


router.get(
  '/api/require-auth',
  requireAuth,
  (req, res) => {
    return res.json(req.user);
  }
);


export default router;