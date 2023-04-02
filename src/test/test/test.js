
        // Safari and Android does not support performance.timing.navigationStart:
        if (window.performance) {
            window.navigationStart = window.performance.timing.navigationStart;
        } else {
            window.navigationStart = Date.now() + 300;
        }
    
    window._AMapSecurityConfig = {
        securityJsCode: '14a8f788b0cd013c926531adab789283',
    }
