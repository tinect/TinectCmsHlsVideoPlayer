import template from './sw-cms-el-config-tinecthlsvideo.html.twig';
import './sw-cms-el-config-tinecthlsvideo.scss';

const {Component, Mixin} = Shopware;

Component.register('sw-cms-el-config-tinecthlsvideo', {
    template,

    mixins: [
        Mixin.getByName('cms-element')
    ],

    inject: ['repositoryFactory'],

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.initElementConfig('tinecthlsvideo');
        },
    }
});

