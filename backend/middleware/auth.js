import jwt from "jsonwebtoken";




const auth = (res, res, next) => {
    try {
        const token = req.headers.autherization.split(" ")[1];
        let decodedData = jwt.verify(token, process.env.JWT_SECRET)
        req.userId = decodedData?.id;
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({ message: "Unauthorized" });
    }
}

export default auth;