module.exports = {
    apps: [
        {
            name: 'kylehub-neongear',
            script: 'node_modules/next/dist/bin/next',
            args: 'start',
            env: {
                NODE_ENV: 'production',
                PORT: 3001
            }
        }
    ]
}