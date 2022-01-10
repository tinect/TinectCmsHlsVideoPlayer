import template from './sw-cms-el-tinecthlsvideo.html.twig';
import './sw-cms-el-tinecthlsvideo.scss';

const {Component, Mixin} = Shopware;

Component.register('sw-cms-el-tinecthlsvideo', {
    template,

    mixins: [
        Mixin.getByName('cms-element')
    ],

    watch: {
        cmsPageState: {
            deep: true,
            handler() {
                this.$forceUpdate();
            }
        },
    },

    created() {
        this.createdComponent();
    },

    methods: {
        createdComponent() {
            this.initElementConfig('tinecthlsvideo');
            this.initElementData('tinecthlsvideo');
        },
    }
});
