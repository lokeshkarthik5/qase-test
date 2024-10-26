const config = {
    use: {
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    },
    reporter: [
    ['list'],
    [
    'playwright-qase-reporter',
    {
    mode: 'testops',
    debug: false,
    testops: {
    api: {
    token: '090b38ed4642629f72301899bcf135cd2285bed2bb4a5992edc379222a31100c',
    },
    project: 'DEMO', // Replace <DEMO> with your project code
    uploadAttachments: true,
    run: {
    complete: true,
    },
    },
    },
    ],
    ],
    };
    
    module.exports = config;