const router = require("express").Router();
import QuestionRoutes from "./questionRoutes.js";
import UserRoutes from "./userRoutes.js";
// import LoginPage from "../../../frontend/src/pages/LoginPage.js";
import { restoreUser } from '../../utils/auth.js';
import askQuestionRoutes from "./askQuestionRoutes.js";
import { requireAuth } from '../../utils/auth.js';


router.use(restoreUser);
// backend/routes/api/index.js

router.use("/session", sessionRouter);

router.use("/user", UserRoutes);

router.use("/questions", QuestionRoutes);

router.use("/ask", askQuestionRoutes);





// // GET /api/set-token-cookie
import { setTokenCookie } from '../../utils/auth.js';
import { User } from '../../db/models1/index.js';
router.get('/set-token-cookie', async (_req, res) => {
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
  '/restore-user',
  (req, res) => {
    return res.json(req.user);
  }
);

// GET /api/require-auth


router.get(
  '/require-auth',
  requireAuth,
  (req, res) => {
    return res.json(req.user);
  }
);


export default router;