//! Http Status codes
const STATUS_CODES = {
    OK: 200,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    NOT_ACCEPTABLE: 406,
    REQUEST_TIMEOUT: 408,
    UNSUPPORTED_MEDIA_TYPE: 415,
    TOO_MANY_REQUESTS: 429,
    INTERNAL_SERVER_ERROR: 500,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIMEOUT: 504
}

const toResponse = (statusCode, params = {}) => {
    const {
        code = null, data = null, message = null
    } = params

    if (statusCode < 400) {
        return {
            status: 'success',
            code,
            data,
            message
        }
    } else {
        return {
            status: statusCode < 500 ? 'fail' : 'error',
            code,
            data,
            message
        }
    }
}


//! Utility Class to easily make Koa Response
class Response {
    static get STATUS_CODES() {
        return STATUS_CODES
    }

    static success(ctx, params = {}) {
        ctx.status = params.statusCode || ctx.status;
        if (ctx.status >= 400) {
            ctx.status = this.STATUS_CODES.OK;
        }
        ctx.body = toResponse(ctx.status, params);
        return ctx.body;
    }

    static fail(ctx, params = {}) {
        ctx.status = params.statusCode || ctx.status;
        if (ctx.status < 400 || ctx.status >= 500) {
            ctx.status = this.STATUS_CODES.BAD_REQUEST;
        }
        ctx.body = toResponse(ctx.status, params);
        return ctx.body;
    }

    static error(ctx, params = {}) {
        ctx.status = params.statusCode || ctx.status;
        if (ctx.status < 500) {
            ctx.status = this.STATUS_CODES.INTERNAL_SERVER_ERROR;
        }
        ctx.body = toResponse(ctx.status, params);
        return ctx.body;
    }

    static ok(ctx, params = {}) {
        ctx.status = this.STATUS_CODES.OK
        ctx.body = toResponse(ctx.status, params)
        return ctx.body
    }

    static noContent(ctx, params = {}) {
        ctx.status = this.STATUS_CODES.NO_CONTENT;
        ctx.body = toResponse(ctx.status, params);
        return ctx.body;
    }

    static badRequest(ctx, params = {}) {
        ctx.status = this.STATUS_CODES.BAD_REQUEST;
        ctx.body = toResponse(ctx.status, params);
        return ctx.body;
    }

    static unauthorized(ctx, params = {}) {
        ctx.status = this.STATUS_CODES.UNAUTHORIZED;
        ctx.body = toResponse(ctx.status, params);
        return ctx.body;
    }

    static notFound(ctx, params = {}) {
        ctx.status = this.STATUS_CODES.NOT_FOUND;
        ctx.body = toResponse(ctx.status, params);
        return ctx.body;
    }

    static notAcceptable(ctx, params = {}) {
        ctx.status = this.STATUS_CODES.NOT_ACCEPTABLE;
        ctx.body = toResponse(ctx.status, params);
        return ctx.body;
    }

    static requestTimeout(ctx, params = {}) {
        ctx.status = this.STATUS_CODES.REQUEST_TIMEOUT;
        ctx.body = toResponse(ctx.status, params);
        return ctx.body;
    }

    static unsupportedMediaType(ctx, params = {}) {
        ctx.status = this.STATUS_CODES.UNSUPPORTED_MEDIA_TYPE;
        ctx.body = toResponse(ctx.status, params);
        return ctx.body;
    }

    static internalServerError(ctx, params = {}) {
        ctx.status = this.STATUS_CODES.INTERNAL_SERVER_ERROR;
        ctx.body = toResponse(ctx.status, params);
        return ctx.body;
    }

    static badGateway(ctx, params = {}) {
        ctx.status = this.STATUS_CODES.BAD_GATEWAY;
        ctx.body = toResponse(ctx.status, params);
        return ctx.body;
    }

    static serviceUnavailable(ctx, params = {}) {
        ctx.status = this.STATUS_CODES.SERVICE_UNAVAILABLE;
        ctx.body = toResponse(ctx.status, params);
        return ctx.body;
    }

    static gatewayTimeout(ctx, params = {}) {
        ctx.status = this.STATUS_CODES.GATEWAY_TIMEOUT;
        ctx.body = toResponse(ctx.status, params);
        return ctx.body;
    }
}

module.exports = Response