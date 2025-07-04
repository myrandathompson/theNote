import { sign, verify } from 'jsonwebtoken';
import { jwtConfig } from '../db/config';
import { User } from '../db/models1';

const { secret, expiresIn } = jwtConfig;



// // Middleware to restore user from JWT
// const restoreUser = async (req, res, next) => {
//     const { token } = req.cookies;
//     req.user = null; // Default to null

//     if (!token) {
//         return next();
//     }

//     jwt.verify(token, secret, User, async (err, jwtPayload) => {
//         if (err) {
//             res.clearCookie('token');
//             return next();
//         }

//         try {
//             const { id } = jwtPayload.data;
//             const user = await User.scope('currentUser').findByPk(id);

//             if (user) {
//                 req.user = user; // Attach user to req
//             } else {
//                 res.clearCookie('token');
//             }
//         } catch (e) {
//             res.clearCookie('token');
//         }

//         return next();
//     });
// };
// // Sends a JWT Cookie
const setTokenCookie = (res, user) => {
    // Create the token.
    const safeUser = {
      id: user.id,
      email: user.email,
      username: user.username,
    };
    const token = sign(
      { data: safeUser },
      secret,
      { expiresIn: parseInt(expiresIn) } // 604,800 seconds = 1 week
    );
  
    const isProduction = process.env.NODE_ENV === "production";
  
    // Set the token cookie
    res.cookie('token', token, {
      maxAge: expiresIn * 1000, // maxAge in milliseconds
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction && "Lax"
    });
  
    return token;
  };


  const restoreUser = (req, res, next) => {
    // token parsed from cookies
    const { token } = req.cookies;
    req.user = null;
  
    return verify(token, secret, null, async (err, jwtPayload) => {
      if (err) {
        return next();
      }
  
      try {
        const { id } = jwtPayload.data;
        req.user = await User.findByPk(id, {
          attributes: {
            include: ['email', 'createdAt', 'updatedAt']
          }
        });
      } catch (e) {
        res.clearCookie('token');
        return next();
      }
  
      if (!req.user) res.clearCookie('token');
  
      return next();
    });
  };
  
  // If there is no current user, return an error
const requireAuth = function (req, _res, next) {
    if (req.user) return next();
  
    const err = new Error('Authentication required');
    err.title = 'Authentication required';
    err.errors = { message: 'Authentication required' };
    err.status = 401;
    return next(err);
  }


  export default { setTokenCookie, restoreUser, requireAuth };
// // Sends a JWT Cookie
// const setTokenCookie = (res, user) => {
//     // Create the token.
//     const token = jwt.sign(
//         { data: user.toSafeObject() },
//         secret,
//         { expiresIn: parseInt(expiresIn) } // 604,800 seconds = 1 week
//     );

//     const isProduction = process.env.NODE_ENV === "production";

//     // Set the token cookie
//     res.cookie('token', token, {
//         maxAge: expiresIn * 1000, // maxAge in milliseconds
//         httpOnly: true,
//         secure: isProduction,
//         sameSite: "Lax", // Always use Lax for security
//     });

//     return token;
// };
// // Middleware to require authentication
// const requireAuth = (req, _res, next) => {
//     if (req.user) return next(); // Check for req.user, not req.User


//     return _res.status(401).json({
//         message: "Authentication required"
//     });

//     // const err = new Error('Unauthorized');
//     // err.title = 'Unauthorized';
//     // err.errors = ['Unauthorized'];
//     // err.status = 401;
//     // return next(err);
// };



// module.exports = { setTokenCookie, restoreUser, requireAuth };
