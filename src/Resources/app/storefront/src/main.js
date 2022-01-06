import VideoPlugin from "./plugin/video/video.plugin";

// Necessary for the webpack hot module reloading server
if (module.hot) {
    module.hot.accept();
}

window.PluginManager.register('TinectHlsVideoPlayerPlugin', VideoPlugin, 'video');
