import jwt from 'jsonwebtoken';

export const generateToken = (userID, res)=>{
    const token = jwt.sign({ id: userID }, process.env.JWT_SECRET, {
        expiresIn: '7d',
    });
    res.cookie('token', token, {
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        httpOnly: true, //prevents client-side JavaScript from accessing the cookie
        secure: process.env.NODE_ENV === 'development', // set to true if using https
        sameSite: 'strict', // csrf attack prevention
    });
    return token;
}