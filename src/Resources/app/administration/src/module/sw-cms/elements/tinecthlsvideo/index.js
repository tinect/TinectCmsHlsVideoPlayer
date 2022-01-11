import './component';
import './config';
import './preview';

Shopware.Service('cmsService').registerCmsElement({
    name: 'tinecthlsvideo',
    label: 'tinecthlsvideo.label',
    component: 'sw-cms-el-tinecthlsvideo',
    configComponent: 'sw-cms-el-config-tinecthlsvideo',
    previewComponent: 'sw-cms-el-preview-tinecthlsvideo',
    defaultConfig: {
        thumbnailurl: {
            source: 'static',
            value: ''
        },
        playlisturl: {
            source: 'static',
            value: ''
        },
        autoplay: {
            source: 'static',
            value: false
        },
        loop: {
            source: 'static',
            value: false
        },
        muted: {
            source: 'static',
            value: false
        },
        videoposition: {
            source: 'static',
            value: false
        },
        optionalwidth: {
            source: 'static',
            value: ''
        },
    }
});
