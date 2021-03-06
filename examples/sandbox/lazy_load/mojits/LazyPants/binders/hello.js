/*
 * Copyright (c) 2011-2012, Yahoo! Inc.  All rights reserved.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */

YUI.add('LazyPantsBinderHello', function(Y, NAME) {

/**
 * The LazyPantsBinderHello module.
 *
 * @module LazyPantsBinderHello
 */

    /**
     * Constructor for the Binder class.
     *
     * @param mojitProxy {Object} The proxy to allow the binder to interact
     *        with its owning mojit.
     *
     * @class Binder
     * @constructor
     */
    Y.namespace('mojito.binders')[NAME] = {

        /**
         * Binder initialization method, invoked after all binders on the page
         * have been constructed.
         */
        init: function(mojitProxy) {
            var me = this;
            this.mp = mojitProxy;
            this.mp.listen('update-style', function(evt) {
                me.node.setStyles(evt.data);
            });
        },

        /**
         * The binder method, invoked to allow the mojit to attach DOM event
         * handlers.
         *
         * @param node {Node} The DOM node to which this mojit is attached.
         */
        bind: function(node) {
            this.node = node;
            this.mp.broadcast('lazy-load');
        }

    };

}, '0.0.1', {requires: ['mojito-client', 'node']});
