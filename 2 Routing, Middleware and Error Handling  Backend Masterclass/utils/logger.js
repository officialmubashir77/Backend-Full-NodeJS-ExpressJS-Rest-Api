const logger = (req, res, next) => {
    const start = Date.now();

    res.on('finish', () => {
        try {
            const duration = Date.now() - start;
            const status = res.statusCode;
            const type = status >= 500 ? 'ERROR' : status >= 400 ? 'WARN' : 'OK';
            console.log(`${type} ${req.method} ${req.url} - ${new Date().toISOString()} - ${duration}ms`);
        } catch (error) {
            console.error(`[Error] ${error.message} ${req.method} ${req.url}`);
        }
    });

    next();
};

module.exports = logger;