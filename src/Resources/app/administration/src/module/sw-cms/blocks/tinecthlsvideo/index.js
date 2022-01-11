import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'tinecthlsvideo',
    label: 'tinecthlsvideo.label',
    category: 'video',
    component: 'sw-cms-block-tinecthlsvideo',
    previewComponent: 'sw-cms-preview-tinecthlsvideo',
    defaultConfig: {
        marginBottom: '0',
        marginTop: '0',
        marginLeft: '0',
        marginRight: '0',
        sizingMode: 'boxed'
    },
    slots: {
        content: 'tinecthlsvideo'
    },
});
