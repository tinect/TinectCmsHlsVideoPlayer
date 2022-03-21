import Plugin from 'src/plugin-system/plugin.class';
import DomAccess from 'src/helper/dom-access.helper';
import Helper from "../../helper/helper";

/**
 * example:
 <video preload="none" crossorigin autoplay loop muted
 data-poster="https://vz-ec4043f9-51a.b-cdn.net/83bc4f05-5621-4e0e-87f2-95f288f06cea/thumbnail.jpg"
 data-playlist="https://vz-ec4043f9-51a.b-cdn.net/83bc4f05-5621-4e0e-87f2-95f288f06cea/playlist.m3u8">
 </video>
 */
export default class VideoPlugin extends Plugin {
    static options = {};

    init() {
        const me = this;

        Helper.loadExternalModule('Plyr', () => {
            if (DomAccess.hasAttribute(me.el, 'data-playlist')) {
                Helper.loadExternalModule('Hls', () => {
                    me._install(me.el, (el) => {
                        this._registerHls(el);
                    });
                });
                return;
            }

            me._install(me.el, (el) => {
                this._register(el);
            });
        });
    }

    _install(video, callback) {
        const intersectionObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                // If intersectionRatio is 0, the target is out of view
                // and we do not need to do anything.
                if (entry.intersectionRatio <= 0) return;

                observer.unobserve(entry.target);
                callback(entry.target);
            });
        });
        // start observing
        intersectionObserver.observe(video);
    }

    _registerHls(video) {
        const me = this;

        const plyrOptions = me._generateOptions(video);

        const source = DomAccess.getDataAttribute(video, 'playlist', false);

        if (!Hls.isSupported()) {
            video.src = source;
            me.initPlayer(video, plyrOptions);
        } else {
            const hlsConfig = {
                capLevelToPlayerSize: true,
                abrEwmaDefaultEstimate: 500000000 * 1.2,
                testBandwidth: false
            };
            if (DomAccess.getAttribute(video, 'preload', false) === 'none') {
                hlsConfig.autoStartLoad = false;
            }

            const hls = new Hls(hlsConfig);
            hls.loadSource(source);

            let spanQualityElement = null;

            hls.on(Hls.Events.MANIFEST_PARSED, () => {
                const availableQualities = hls.levels.map(l => l.height);
                availableQualities.unshift(0) //prepend 0 to quality array;

                // Add new qualities to option
                plyrOptions.quality = {
                    options: availableQualities,
                    default: availableQualities[availableQualities - 1],
                    // this ensures Plyr to use Hls to update quality level
                    forced: true,
                    onChange: (e) => {
                        me.updateQuality(hls, e);
                    },
                }

                const player = me.initPlayer(video, plyrOptions);
                player.on('play', () => {
                    hls.startLoad();
                });
                hls.attachMedia(video);

                hls.currentLevel = -1;

                spanQualityElement = document.querySelector(".plyr__controls [data-plyr='quality'][value='0'] span");
                if (spanQualityElement) {
                    spanQualityElement.innerHTML = 'Auto';
                }
            });

            hls.on(Hls.Events.LEVEL_SWITCHED, function (event, data) {
                if (!spanQualityElement) {
                    return;
                }

                if (hls.autoLevelEnabled) {
                    const height = hls.levels[data.level].height;
                    spanQualityElement.innerHTML = 'Auto (' + height + 'p)';
                    return;
                }

                spanQualityElement.innerHTML = 'Auto';
            });
        }
    }

    _register(video) {
        const me = this;
        const plyrOptions = me._generateOptions(video);

        me.initPlayer(video, plyrOptions);
    }

    _generateOptions(element) {
        const plyrOptions = {
            controls: ['play-large'],
        };

        if (DomAccess.hasAttribute(element, 'autoplay')) {
            element.removeAttribute('preload');
            plyrOptions.autoplay = true;
        }

        if (DomAccess.hasAttribute(element, 'loop')) {
            plyrOptions.loop = {active: false};
        }

        return plyrOptions;
    }

    initPlayer(element, options) {
        return new Plyr(element, options);
    }

    updateQuality(hls, newQuality) {
        if (newQuality === 0) {
            hls.currentLevel = -1; //Enable AUTO quality
        } else {
            hls.levels.forEach((level, levelIndex) => {
                if (level.height === newQuality) {
                    hls.currentLevel = levelIndex;
                }
            });
        }
    };
}
