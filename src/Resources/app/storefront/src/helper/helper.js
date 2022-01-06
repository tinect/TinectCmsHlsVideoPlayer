// noinspection DuplicatedCode

export default class Helper {
    static loadJavaScriptFile(url) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.src = url;
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        })
    }

    static loadExternalModule(moduleName, callback) {
        if (window[moduleName]) {
            if (typeof callback === 'function') {
                callback();
            }

            return;
        }

        if (!window.tinectLazyloadJavascripts) {
            console.error('Variable tinectLazyloadJavascripts missing', moduleName);
            return;
        }

        const url = window.tinectLazyloadJavascripts[moduleName];
        if (!url) {
            console.error('There is no url set for module', moduleName);
            return;
        }

        this.loadJavaScriptFile(url)
            .then(() => {
                if (!window[moduleName]) {
                    console.error('Module cannot be loaded', moduleName);
                    return;
                }

                if (typeof callback === 'function') {
                    callback();
                }
            })
            .catch((err) => {
                console.error('There was an error loading the external javascript file', moduleName, err);
            });
    }
}
