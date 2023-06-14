import { ErrorRequestHandler } from "express";

export const errorHandler : ErrorRequestHandler = (err :Error,req,res, next) => {

    const statusCode = res.statusCode || 500
    switch (statusCode) {
        case 404:
            res.json({"statusCode": statusCode, "message": err.message || "NOT FOUND"})
            break;
        case 400:
            res.json({"statusCode": statusCode, "message": err.message || "BAD REQUEST"})
            break;
        case 401:
            res.json({"statusCode": statusCode, "message": err.message || "NOT AUTHORIZED"})
            break;
        case 403:
            res.json({"statusCode": statusCode, "message": err.message || "FORBIDDEN"})
            break;
        case 500:
            res.json({"statusCode": statusCode, "message": err.message || "SERVER ERROR"})
            break;
        default:
            break;
    }
}