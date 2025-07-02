// backend/routes/api/session.js
import { Router } from 'express';
import { setTokenCookie, restoreUser } from '../../utils/auth';
import { User } from '../../db/models1';
import { check, validationResult } from 'express-validator';
// const { handleValidationErrors } = require('../../utils/validation');

const router = Router();

const validateLogin = [
    check('credential')
        .exists({ checkFalsy: true })
        .withMessage('Email = is required'),
    check('password')
        .exists({ checkFalsy: true })
        .withMessage('Password is required'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                message: 'Bad Request',
                errors: errors.array().reduce((acc, error) => {
                    acc[error.param] = error.msg;
                    return acc;
                }, {})
            });
        }
        next();
    }
];

// POST /api/session - Log in a user
router.post('/api/session', validateLogin, async (req, res) => {
    const { credential, password } = req.body;

    // Find user by credential (email or username) and validate password
    const user = await User.login({ credential, password });

    if (!user) {
        return res.status(401).json({
            message: 'Invalid credentials'
        });
    }

    // Set JWT token as a cookie
    setTokenCookie(res, user);

    // Return user information
    return res.status(200).json({
        user: {
            id: user.id,
            email: user.email
        }
    });
});


// GET /api/session - Get current user
router.get('/api/session', restoreUser, (req, res) => {
    const { user } = req;

    if (user) {
        return res.json({
            user: user.toSafeObject()
        });
    } else {
        return res.json({
            user: null
        });
    }
});

// DELETE /api/session - Logout
router.delete('/api/session', (_req, res) => {
    res.clearCookie('token');
    return res.json({ message: 'success' });
});

export default router;
