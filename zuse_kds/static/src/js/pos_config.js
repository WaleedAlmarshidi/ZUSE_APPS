odoo.define('pos_custom_buttons.DemoButton', function (require) {
   'use strict';
   const { Gui } = require('point_of_sale.Gui');
   const PosComponent = require('point_of_sale.PosComponent');
   const { identifyError } = require('point_of_sale.utils');r
   const ProductScreen = require('point_of_sale.ProductScreen');
   const { useListener } = require("@web/core/utils/hooks");
   const Registries = require('point_of_sale.Registries');
   const PaymentScreen = require('point_of_sale.PaymentScreen');
   class SendKitchen extends PosComponent {
      constructor() {
         // super(...arguments);
         super.setup();
         useListener("click-send-kitchen", this.onClickSendKitchen);
      }
      is_available() {
         return this.env.pos.get_order();
      }
      onClickSendKitchen() {
         const order = this.is_available();
         this.env.pos.push_orders(order, {'draft': true}).then(function (result) {
            return result;
         });
         this.rpc({
            model: 'pos.order',
            method: 'send_to_kitchen',
            args: [false],
            kwargs: {'order_name': order.name},
        })
      }
   }
   SendKitchen.template = 'SendToKitchen';
   ProductScreen.addControlButton({
      component: SendKitchen,
      condition: function () {
         return this.env.pos;
      },
   });
   Registries.Component.add(SendKitchen);
   return SendKitchen;
});